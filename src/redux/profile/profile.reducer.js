import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProfileDetails, updateDeliveryAddressDetails} from "@/frontend-libs/reown-lib";
import {authActions} from "@/redux/auth/auth.reducer";

const INITIAL_STATE = {
    profile:null,
    billingAddress:null,
    deliveryAddress:null
}

const getProfileFullDetails = createAsyncThunk('profileFullDetails', async (payload, thunkApi)=>{

    const profile_details = await getProfileDetails(thunkApi.getState().auth.token??'')
    if(profile_details.status == 200){
        thunkApi.dispatch(profileActions.setPartyFullData({
            party: profile_details.data.party,
            billingAddress:profile_details.data.billing_address,
            deliveryAddress:profile_details.data.delivery_address,
        }))
    }
    else if(profile_details.status == 401 ){
        if(profile_details.data.device_action == 'refresh_bearer_token'){
            //refresh token if token bearer token is expired
            thunkApi.dispatch(authActions.refreshTokens()).unwrap().then((data)=>{
                thunkApi.dispatch(getProfileFullDetails(payload))
            })
        }else if(profile_details.data.device_action == 'ask_login'){
            //open login sidebar
            thunkApi.dispatch(authActions.logout())
        }
    }else{
        // display error
    }
})

const saveDeliveryDetails = createAsyncThunk('saveDeliveryDetails', async (payload, thunkApi)=>{
    const update_response = await updateDeliveryAddressDetails(thunkApi.getState().auth.token??'', payload.name, payload.email, payload.shipto_houseno, payload.shipto_street, payload.shipto_locality, payload.shipto_city, payload.shipto_state, payload.shipto_pincode, payload.billing_same_as_shipping, payload.billing_houseno, payload.billing_street, payload.billing_locality, payload.billing_city, payload.billing_state, payload.billing_pincode, payload.buying_for_business, payload.gst_no, payload.company_name)
    if(update_response.status == 200){
        thunkApi.dispatch(profileActions.setDeliveryAddress(payload))
        thunkApi.dispatch(profileActions.setBillingAddress(payload))
    }
    return update_response
})


const profileSlice = createSlice({
    name : 'profile',
    initialState: INITIAL_STATE,
    reducers: {
        setPartyFullData(state, action) {
            state.party = action.payload.party,
            state.deliveryAddress = action.payload.deliveryAddress,
            state.billingAddress = action.payload.billingAddress
        },
        setDeliveryAddress(state, action){
            state.deliveryAddress = {
                ...state.deliveryAddress,
                party_address_line_1: action.payload.shipto_houseno+', '+action.payload.shipto_street+', '+action.payload.shipto_locality,
                party_address_line_2:null,
                party_house_no:action.payload.shipto_houseno,
                party_street_no:action.payload.shipto_street,
                party_locality:action.payload.shipto_locality,
                party_city:action.payload.shipto_city,
                party_state:action.payload.shipto_state,
                party_pincode:action.payload.shipto_pincode
            }
        },
        setBillingAddress(state, action){
            state.billingAddress = {
                ...state.billingAddress,
                party_address_line_1: action.payload.billing_houseno+', '+action.payload.billing_street+', '+action.payload.billing_locality,
                party_address_line_2:null,
                party_house_no:action.payload.billing_houseno,
                party_street_no:action.payload.billing_street,
                party_locality:action.payload.billing_locality,
                party_city:action.payload.billing_city,
                party_state:action.payload.billing_state,
                party_pincode:action.payload.billing_pincode
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase('auth/logout', (state,action)=>{
                state.party = null,
                state.shippingAddress = null,
                state.billingAddress = null
        })
    }
})


export const profileReducer = profileSlice.reducer
export const profileActions = {...profileSlice.actions, getProfileFullDetails, saveDeliveryDetails}