import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authActions} from "@/redux/auth/auth.reducer";
import {getCart, addToCart as addCartApi, clearCart, applyCoupon, revokeCoupon} from "@/frontend-libs/reown-lib";
import {checkAuthData, refreshAndRepeat} from "@/frontend-libs/helpers";

const INITIAL_STATE = {
    cartItems : [],
    addingToCart:false,
    cartItemsData:[],
    cartCount:0,
    cartTotal:0,
    cartDiscount:0,
    cartQuantity:0
}

//add item to cart
const addToCart = createAsyncThunk('addToCart', async (payload, thunkApi)=>{

    if(!checkAuthData(thunkApi, authActions.openSidebar))
    {
        thunkApi.dispatch(cartActions.setPendingAction(true))
        return null
    }
    let resp = await addCartApi(thunkApi.getState().auth.token??'', payload.product_sku_id, payload.quantity, payload.custom_ram, payload.custom_hdd)
    if(resp.status == 200){
        // update cart
        const cartItemsDetails = resp.data.cart.cart
        thunkApi.dispatch(cartActions.setPendingAction(false))
        const cartCount = resp.data.cart.count
        const cartTotal = resp.data.cart.total_amount
        const cartQuantity = resp.data.cart.total_quantity
        const cartDiscount = resp.data.cart.total_discount
        let finalItems = []
        cartItemsDetails.forEach(function(element){
            finalItems.push(element.product_sku_id)
        })
        thunkApi.dispatch(cartActions.syncItems({finalItems,cartItemsDetails,cartCount,cartTotal,cartQuantity,cartDiscount}))
    }
    else if(resp.status == 401){
        const repeat_res= await refreshAndRepeat(thunkApi, resp, payload, cartActions.addToCart, authActions.refreshTokens, authActions.logout, authActions.openSidebar)
        if(!repeat_res)
            return repeat_res
    }
    return resp
})

const removeCart = createAsyncThunk('removeCart', async (payload, thunkApi) => {
    if(!checkAuthData(thunkApi, authActions.openSidebar))
        return null

    let resp = await clearCart(thunkApi.getState().auth.token??'', payload)
    if(resp.status == 200){
        // update cart
        const cartItemsDetails = resp.data.cart.cart
        thunkApi.dispatch(cartActions.setPendingAction(false))
        const cartCount = resp.data.cart.count
        const cartTotal = resp.data.cart.total_amount
        const cartQuantity = resp.data.cart.total_quantity
        const cartDiscount = resp.data.cart.total_discount
        let finalItems = []
        cartItemsDetails.forEach(function(element){
            finalItems.push(element.product_sku_id)
        })
        thunkApi.dispatch(cartActions.syncItems({finalItems,cartItemsDetails,cartCount,cartTotal,cartQuantity,cartDiscount}))
    }
    else {
        const repeat_res= await refreshAndRepeat(thunkApi, resp, payload, cartActions.removeCart, authActions.refreshTokens, authActions.logout, authActions.openSidebar)
        if(!repeat_res)
            return repeat_res
    }
    return resp
})

//load cart data from server to redux store
const syncCartData = createAsyncThunk('syncCartData', async (payload, thunkApi) => {
    const resp = await getCart(thunkApi.getState().auth.token??'')
    let changes = false
    if(resp.status == 200 && resp.data.cart){
        const cartItemsDetails = resp.data.cart
        const cartCount = resp.data.count
        const cartTotal = resp.data.total_amount
        const cartQuantity = resp.data.total_quantity
        const cartDiscount = resp.data.total_discount
        const existing = thunkApi.getState().cart.cartItems
        let finalItems = []
        cartItemsDetails.forEach(function(element){
            if(!existing.includes(element.product_sku_id))
                changes = true
            finalItems.push(element.product_sku_id)
        })
        if(finalItems.length!=existing.length || changes){
            thunkApi.dispatch(cartActions.syncItems({finalItems,cartItemsDetails,cartCount,cartTotal,cartQuantity,cartDiscount}))
        }
    }else{
        thunkApi.dispatch(cartActions.clearItems())
    }
})

const applyCouponAction = createAsyncThunk('applyCoupon', async (payload, thunkApi) => {
    if(!checkAuthData(thunkApi, authActions.openSidebar))
        return null

    let resp = await applyCoupon(thunkApi.getState().auth.token??'', payload)
    if(resp.status == 200){
        // update cart
        const cartItemsDetails = resp.data.cart.cart
        thunkApi.dispatch(cartActions.setPendingAction(false))
        const cartCount = resp.data.cart.count
        const cartTotal = resp.data.cart.total_amount
        const cartQuantity = resp.data.cart.total_quantity
        const cartDiscount = resp.data.cart.total_discount
        let finalItems = []
        cartItemsDetails.forEach(function(element){
            finalItems.push(element.product_sku_id)
        })
        thunkApi.dispatch(cartActions.syncItems({finalItems,cartItemsDetails,cartCount,cartTotal,cartQuantity,cartDiscount}))
    }
    else {
        const repeat_res= await refreshAndRepeat(thunkApi, resp, payload, cartActions.applyCouponAction, authActions.refreshTokens, authActions.logout, authActions.openSidebar)
        if(!repeat_res)
            return repeat_res
    }
    return resp
})

const revokeCouponAction = createAsyncThunk('applyCoupon', async (payload, thunkApi) => {
    if(!checkAuthData(thunkApi, authActions.openSidebar))
    {
        thunkApi.dispatch(cartActions.setPendingAction(true))
        return null
    }
    let resp = await revokeCoupon(thunkApi.getState().auth.token??'', payload)
    if(resp.status == 200){
        // update cart
        const cartItemsDetails = resp.data.cart.cart
        thunkApi.dispatch(cartActions.setPendingAction(false))
        const cartCount = resp.data.cart.count
        const cartTotal = resp.data.cart.total_amount
        const cartQuantity = resp.data.cart.total_quantity
        const cartDiscount = resp.data.cart.total_discount
        let finalItems = []
        cartItemsDetails.forEach(function(element){
            finalItems.push(element.product_sku_id)
        })
        thunkApi.dispatch(cartActions.syncItems({finalItems,cartItemsDetails,cartCount,cartTotal,cartQuantity,cartDiscount}))
    }
    else {
        const repeat_res= await refreshAndRepeat(thunkApi, resp, payload, cartActions.revokeCouponAction, authActions.refreshTokens, authActions.logout, authActions.openSidebar)
        if(!repeat_res)
            return repeat_res
    }
    return resp
})


const cartSlice = createSlice({
    name : 'cart',
    initialState: INITIAL_STATE,
    reducers: {
            syncItems(state, action){
                state.cartItems = action.payload.finalItems
                state.cartItemsData = action.payload.cartItemsDetails
                state.cartQuantity = action.payload.cartQuantity
                state.cartTotal = action.payload.cartTotal
                state.cartDiscount = action.payload.cartDiscount
                state.cartCount = action.payload.cartCount
            },
            clearItems(state, action){
                state.cartItems = []
                state.cartItemsData = []
            },
            removeItem(state,action){

            },
            addItem(state,action){
                let items = state.cartItems
                items.push(action.payload)
                state.cartItems=items
            },
            setPendingAction(state, action){
                state.addingToCart = action.payload
            }
    },
    extraReducers: (builder)=> {
        //clear cart store on signout
        builder.addCase('auth/logout', (state,action)=>{
            state.cartItems = []
            state.cartItemsData = [],
            state.cartCount = 0,
            state.cartTotal = 0,
            state.cartDiscount = 0,
            state.cartQuantity = 0
        })
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = {...cartSlice.actions, addToCart, removeCart, syncCartData, applyCouponAction, revokeCouponAction};