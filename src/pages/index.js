import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";
import ReownHome from "@/components/reown/reown-home.component";


const Reown = () => {
  return <ReownHome></ReownHome>
}
export const getServerSideProps = withSessionSsr(async function getServerSideProps({req, query}){
  const data = [];
  const result = await getCommonData(req, data)
  if(result.success == true){
      return {
          props: {
              ...result.data,
          }
      }
  }
  return {
      props:{}
  }
})

export default Reown