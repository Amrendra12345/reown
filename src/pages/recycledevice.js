import HomeTopSection from "@/components/home/home-top-section";
import HomeHowItWorks from "@/components/home/home-how-it-works";
import HomeCounters from "@/components/home/home-counters";
import HomeGrowthStory from "@/components/home/home-growth-story";
import HomeDownloadAppComponent from "@/components/home/home-download-app.component";
import HomeCategoryComponent from "@/components/home/home-category.component";
import {getCommonData, getPageNameFromUrl} from "@/server-libs/helpers";
import HomeFaqsComponent from "@/components/home/home-faqs.component";
import {withSessionSsr} from "@/server-libs/session-lib";
const Home = (props) => {

  return (
      <>
            <HomeTopSection />
            <HomeCategoryComponent categories = {props.categories}/>
            {/*<HomeDownloadAppComponent/>*/}
            <HomeHowItWorks/>
            <HomeCounters home_counters={props.home_counters} />
             <HomeFaqsComponent/>             
             <HomeGrowthStory />
      </>
  )
}


export const getServerSideProps = withSessionSsr(async function getServerSideProps({req}){

    const data = [
        {
            data_name:'view-counter'
        },
        {
            data_name:'view-categories',
            city:'Noida'
        },
        {
            data_name:'view-categories',
            city:'Noida'
        }
    ];
    const result = await getCommonData(req, data)
    if(result.success == true){
        return {
            props:result.data
        }
    }
    return {
        props:{}
    }
})

export default Home;