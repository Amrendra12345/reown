import {atob, btoa} from "next/dist/compiled/@edge-runtime/primitives/encoding";

export const validateEmail = (email)=>{
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if( !emailReg.test( email ) ) {
        return false;
    } else {
        return true;
    }
}


export const utf8_to_b64 = (str) =>{
    return btoa(encodeURIComponent(str));
}

export const b64_to_utf8 = (str) =>{
    return decodeURIComponent(atob(str));
}


/**
 * Create category name from url slug
 * @param $category
 * @returns {*}
 */
export const getCategoryName = (category_slug) => {
    return category_slug?category_slug.replace('-', ' '):category_slug
}

/**
 * Create category slug from name
 * @param $category
 * @returns {*}
 */
export const getCategorySlug = (category_name) => {
    return (category_name?category_name.replace(' ', '-'):category_name).toLowerCase()
}

export const capitalizeFirstLetter = (s)=>
{
    return s[0].toUpperCase() + s.slice(1);
}


export const get_visitor_os =() =>{
    let userAgent = navigator.userAgent;
    if (userAgent.search(/window/i) != -1) {
        return "windows";
    } else if (userAgent.search(/linux/i) != -1) {
        return "linux";
    } else if (userAgent.search(/mac/i) != -1) {
        return "macos";
    } else {
        return "others";
    }
}
export const get_visitor_browser=() =>{
    let userAgent = navigator.userAgent;
    if (userAgent.match(/chrome|chromium|crios/i)) {
        return "chrome";
    } else if (userAgent.match(/trident|msie/i)) {
        return "internet explorer";
    } else if (userAgent.match(/firefox|fxios/i)) {
        return "firefox";
    } else if (userAgent.match(/safari/i)) {
        return "safari";
    } else if (userAgent.match(/opr\//i)) {
        return "opera";
    } else if (userAgent.match(/edg/i)) {
        return "edge";
    } else if (userAgent.match(/netscape/i)) {
        return "netscape";
    } else if (userAgent.match(/maxthon/i)) {
        return "maxthon";
    } else if (userAgent.match(/konqueror/i)) {
        return "konqueror";
    } else if (userAgent.match(/ubrowser/i)) {
        return "uc browser";
    } else if (userAgent.match(/mobile/i)) {
        return "handheld browser";
    } else {
        return "No browser detection";
    }
}
export const get_visitor_bit=() =>{
    if (
        navigator.userAgent.indexOf("WOW64") != -1 ||
        navigator.userAgent.indexOf("Win64") != -1
    ) {
        return "64";
    } else {
        return "32";
    }
}

export const checkForAppleLaptop = () => {
    if(window.location.href.search('apple')!=-1){
        return true
    }
    return false;
}

export const isEmail = (email) => {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

export const validateIntegerField = (e) => {
    // Get the pressed key code
    const keyCode = e.which || e.keyCode;
  
    // Allow only numeric keys (0-9) and certain control keys (e.g., backspace)
    if (!(keyCode >= 48 && keyCode <= 57) && keyCode !== 8) {
        e.preventDefault();
    }
};

export const createUrlFromParams = (page, search, make_id, processor) => {
    let url='?'
    if(page)
        url +='page='+page+'&'
    if(make_id){
        if(Array.isArray(make_id))
        {
            url = make_id.reduce((url, brand)=>{
                return url + 'make_id[]='+brand.toLowerCase()+'&'
            }, url)
        }else{
            url += 'make_id[]='+make_id.toLowerCase()+'&'
        }
    }
    if(processor){
        if(Array.isArray(processor))
        {
            url = processor.reduce((url, elem)=>{
                return url + 'processors[]='+elem.toLowerCase()+'&'
            }, url)
        }else{
            url += 'processors[]='+processor.toLowerCase()+'&'
        }
    }
    if(search)
        url += 'search='+search+'&'
    if(url.charAt(url.length - 1) == '&')
        url = url.slice(0, -1)
    if(url == '?')
        url = ''
    return url
}


/**
 * check if auth information is available
 * otherwise show login popup
 * Returns null if no auth
 * Returns true if auth available
 */
export const checkAuthData = (thunkApi, openSidebar) => {
    if(!(thunkApi.getState().auth && thunkApi.getState().auth.currentUser)){
        // show login pop if user not logged in (no token is available)
        thunkApi.dispatch(openSidebar('login'))
        return false
    }
    return true
}

/**
 * Recall caller function after refreshing token
 * if token is not valid show clear auth info & show login popup
 */
export const refreshAndRepeat = async (thunkApi, dispatch, response, payload, callerFunction, refreshTokens, logout, openSidebar) => {
    if(resp.status == 401){
        if(resp.data.device_action == 'refresh_bearer_token'){
            //refresh token if token bearer token is expired
            const refresh_res = await thunkApi.dispatch(refreshTokens()).unwrap()
            if(refresh_res.status == 200)
                return await thunkApi.dispatch(callerFunction(payload)).unwrap()
        }else if(resp.data.device_action == 'ask_login'){
            //open login sidebar
            thunkApi.dispatch(logout())
            thunkApi.dispatch(openSidebar('login'))
        }
    }
    return null
}