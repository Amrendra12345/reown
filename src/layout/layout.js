import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {authActions} from "@/redux/auth/auth.reducer";

const Layout = (props)=>{
    const dispatch = useDispatch()

    const {city, user, footer} = props;

    useEffect(() => {
        dispatch(authActions.checkAndLoadInitialAuth())
    }, [])

    return <>
        <Header city={city} user={user}/>
        {props.children}
        <Footer footer={footer}/>
    </>
}

export default Layout