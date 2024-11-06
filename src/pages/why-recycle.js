import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";

const WhyRecycle = () => {
    return (
    <div className="container">
			<div className="page_card whyRecycles">
				<video
							style={{
								width: "100%",
								height: "auto",
								objectFit: "cover",
							}}
							src="/images/video/why-recycle.mp4"
							muted
							autoPlay={"autoplay"}
							preLoad="auto"
							loop
						>
							video tag is not supported by your browser
				</video>
				<hr />
				<div className="heading_2">
					<h1> Why Recycle ? </h1>
				</div>
                <p className="mt-1">Recycling is very important as waste has a huge negative impact on the natural environment. Harmful chemicals and greenhouse gasses are released from rubbish in landfill sites. Recycling helps to reduce the pollution caused by waste. The amount of rubbish we create is constantly increasing because people are buying more products and ultimately creating more waste. New technological products are being developed, much of these products contain materials that are not biodegradable. Recycling is one of the best ways to create a positive impact on the world in which we live. Recycle Device through its parent company Exigo Recycling Pvt. Ltd. has started an initiative to remove complexity out of the process of recycling of electronic devices while creating awareness for the need to recycle E waste in an environment-friendly way for a greener, safer planet for the generations to come. Our aim is to provide a simple, straightforward, transparent and sustainable way to recycle your e-waste and electronic assets by directly connecting to you. Exigo is authorized by the State Pollution Boards & Govt. of India to safely Collect, Transport, Dismantle, Segregate & Dispose E waste. Exigo is also registered as a Producer Responsibility Organisation (PRO) to fulfil all the statutory compliances for producers under Extended Producers Responsibility (EPR).</p>
                    <p>Recycle Device facilitates Free Pickup of end of life, dead, not working devices right from your doorstep with on the spot payment. Simply place your order today for pickup of dead devices and help in re-shaping this world for a better tomorrow.</p>
                <div className="whyRecycle">
                    <div className="text-center">
                      <h4>6 great reasons to recycle with us</h4>
                    </div>  
                    <div className="items">
                        <div className="item">
                        <div className="item__head">
                            <p><strong>Genuine Intent</strong></p>
                        </div>
                        <div className="item__body">
                          <p>Unlike other online B2C buyback companies with {`'Cash'`} as their marketing mantra, Recycle Device was formed with vision to help end customers with no direct access to recycling facilities</p>
                        </div>
                        </div>
                        <div className="item">
                        <div className="item__head">
                             <p><strong>Ethical Partner</strong></p>
                        </div>
                        <div className="item__body">
                         <p>Exigo is registered as a Recycler with Haryana State Pollution Control Board & as a Producers Responsibility Organization with Central Pollution Control Board fulfilling EPR requirements of producers</p>
                        </div>
                        </div>
                        <div className="item">
                        <div className="item__head">
                             <p><strong>It supports non-renewable recycling</strong></p>
                        </div>
                        <div className="item__body">
                         <p>The growing demand for electronic devices and appliances means a range of metals and other non-renewable resources need to be mined and processed</p>
                        </div>
                        </div>
                        <div className="item">
                        <div className="item__head">
                             <p><strong>It supports non-renewable recycling</strong></p>
                        </div>
                        <div className="item__body">
                         <p>The growing demand for electronic devices and appliances means a range of metals and other non-renewable resources need to be mined and processed</p>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <Row className="mt-4">
                    <Col className="col-12 text-center">
                         <h3>6 great reasons to recycle with us</h3>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="col-md-4">
                        <Card className="h-100 rounded-0">
                            <Card.Header className="text-center">
                                 <p><strong>Genuine Intent</strong></p>
                            </Card.Header>
                            <Card.Body>
                                <p>Unlike other online B2C buyback companies with {`'Cash'`} as their marketing mantra, Recycle Device was formed with vision to help end customers with no direct access to recycling facilities</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-md-4">
                        <Card className="h-100 rounded-0">
                            <Card.Header className="text-center">
                                 <p><strong>Ethical Partner</strong></p>
                            </Card.Header>
                            <Card.Body>
                                <p>Exigo is registered as a Recycler with Haryana State Pollution Control Board & as a Producers Responsibility Organization with Central Pollution Control Board fulfilling EPR requirements of producers</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-md-4">
                        <Card className="h-100 rounded-0">
                            <Card.Header className="text-center">
                                 <p><strong>It supports non-renewable recycling</strong></p>
                            </Card.Header>
                            <Card.Body>
                                <p>The growing demand for electronic devices and appliances means a range of metals and other non-renewable resources need to be mined and processed</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-md-4 mt-3">
                    <Col className="col-md-4">
                        <Card className="h-100 rounded-0">
                            <Card.Header className="text-center">
                                 <p><strong>It’s super easy to recycle e-waste</strong></p>
                            </Card.Header>
                            <Card.Body>
                                <p>Just place pickup order online and we will collect your old phones, or other electronic items right from your doorstep</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-md-4">
                        <Card className="h-100 rounded-0">
                            <Card.Header className="text-center">
                                 <p><strong>It protects the environment</strong></p>
                            </Card.Header>
                            <Card.Body>
                                <p>Recycling e-waste can keep a range of harmful materials out of the environment</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-md-4">
                        <Card className="h-100 rounded-0">
                            <Card.Header className="text-center">
                                 <p><strong>It shows your eco-friendly credentials</strong></p>
                            </Card.Header>
                            <Card.Body>
                                <p>Today more and more people are coming forward to do their part for the environment and the community</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
			</div>
		</div>
	);
};

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

export default WhyRecycle;
