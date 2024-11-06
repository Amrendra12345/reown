import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import Layout from "@/layout/layout";
// import {SSRProvider} from "react-bootstrap";
import {QuestionAnswerProvider} from "@/context/question-answers.context";
import {Router, useRouter} from "next/router";
import {ProcessOrderProvider} from "@/context/process-order.context";
import Loader from "@/components/loader/loader.component";
import {useEffect, useState} from "react";
import ErrorBoundary from "@/components/error-boundary/error-boundary.component";
import {Provider} from "react-redux";
import {store} from "@/redux/store";
//import {persistor} from "@/redux/store";
//import {PersistGate} from "redux-persist/integration/react";
import BuyLaptopNestedLayoutComponent from "@/components/reown/buy-laptop/buy-laptop-nested-layout.component";
import {BuyLaptopProvider} from "@/context/buy-laptop.context";

function App({ Component, pageProps }) {

    const getLayout = Component.getLayout || (page=>page)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        Router.events.on("routeChangeStart", (url)=>{
            setIsLoading(true)
            console.log('router change start')
        });
        Router.events.on("routeChangeComplete", (url)=>{
            setIsLoading(false)
        });

        Router.events.on("routeChangeError", (url) =>{
            setIsLoading(false)
        });

    }, [Router])

    // useEffect(()=>{
    //     alert()
    // }, [])


  const conditionalRender = (router)=>{
      //  page name for rendering
      if(router.asPath.search('/sell/')!=-1)
          return <QuestionAnswerProvider><Component {...pageProps} /></QuestionAnswerProvider>
      else if(router.asPath.search('/process-order/')!=-1)
          return <ProcessOrderProvider><Component {...pageProps} /></ProcessOrderProvider>
      else if(router.asPath.split('?')[0] == '/buy-laptop')
          return <BuyLaptopNestedLayoutComponent {...pageProps}><BuyLaptopProvider><Component {...pageProps} /></BuyLaptopProvider></BuyLaptopNestedLayoutComponent>
      else
          return <Component {...pageProps} />
  }

  const conditionalLoader = (router) => {
      if(router.asPath.split('?')[0] == '/buy-laptop')
          return (<BuyLaptopNestedLayoutComponent {...pageProps}>
              <Loader></Loader>
      </BuyLaptopNestedLayoutComponent>)
      else
          return <Loader></Loader>
  }

    return getLayout(
        <ErrorBoundary>
            <Head>
                <title>{pageProps.meta_details?pageProps.meta_details.meta_title:''}</title>
                <meta name="description" content={pageProps.meta_details?pageProps.meta_details.meta_desc:''}></meta>
                <meta name="keywords" content={pageProps.meta_details?pageProps.meta_details.meta_keys:''}></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon"/>
            </Head>
          {/*<SSRProvider>*/}
            <Provider store={store}>
                {/*<PersistGate loading={null} persistor={persistor}>*/}
              {
                  !isLoading?(  <Layout {...pageProps}>
                                {
                                  conditionalRender(router)
                                }
                                </Layout>):<Layout {...pageProps}>{conditionalLoader(router)}</Layout>
              }
                {/*</PersistGate>*/}
            </Provider>

          {/*</SSRProvider>*/}
       </ErrorBoundary>)
}

export default App