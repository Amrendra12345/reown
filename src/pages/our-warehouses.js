import Image from 'next/image';
import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";

const OurWarehouses = () => {
    return (
        <> 
            <section className='warehouses'>
                <div className='container'>
                    <div className='heading_2'>
                        <h1>Our Warehouses</h1>
                    </div>
                    <div className='page_card'>
                        <div className='warehouses_content'>
                            <div className='pageTitle'>
                              <p> STRONG PAN INDIA PRESENCE </p>
                            </div>
                            <p>With our ever expanding network of warehouse partners, we are currently serving customers in 20+ cities through our own fleet of field executives. Refer to map displayed for complete list of cities where we have one or more warehouses. We are on a mission to add 100 warehouses to our ecosystem by June 2023. Please  if interested in becoming a warehouse partner.</p>
                          
                        </div>
                        <div className='warehouses_figure'>
                            <div className='figure'>                            
                               <Image alt='our warehouse'fill src="/images/ourNetwork.svg"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      {/* <Container>
          <Row>
              <Col>
                  <div className='heading-1'>
                     <h2>Our Warehouses</h2>
                  </div>
              </Col>
        </Row>
          <Row>
              <Col>
                  <div className='cards'>
                      <Row>
                          <Col className="pt-md-5 ps-md-5" col="12" md="4">
                              <p><strong>STRONG PAN INDIA PRESENCE</strong></p>
                              <p>With our ever expanding network of warehouse partners, we are currently serving customers in 20+ cities through our own fleet of field executives. Refer to map displayed for complete list of cities where we have one or more warehouses. We are on a mission to add 100 warehouses to our ecosystem by June 2023. Please  if interested in becoming a warehouse partner.</p>
                          </Col>
                          <Col className='col-md-8'>
                              <div className={styles.figure}>
                                <Image alt='our warehouse'fill src="/images/ourNetwork.svg"></Image>
                              </div>
                          </Col>
                      </Row>
                  </div>
              </Col>
          </Row>
      </Container> */}
    </>
  )
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

export default OurWarehouses;