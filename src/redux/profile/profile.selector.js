export const getProfileData = (state) => {
    return state.profile
}

export const getDeliveryAddress = (state) => {
    return state.profile?state.profile.deliveryAddress:null
}

export const getBillingAddress = (state) => {
    return state.profile?state.profile.billingAddress:null
}

export const getparty = (state) => {
    return state.profile?state.profile.party:null
}