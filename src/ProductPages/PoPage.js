import React from 'react';
import { Container,CardDeck, Card,Row,Col } from 'react-bootstrap';
import SideBar from '../components/SideBar'

function PoPage(props) {
    return (
        <div style={{ color: "#233048" }}>
            <Container fluid={true} >
                <Row>
                    <Col xl={3} style={{ marginTop: "1.5rem" }}>
                        <SideBar />
                    </Col>
                    <Col xl={9} style={{ marginTop: "2rem" }}>
                        <CardDeck style={{ marginTop: "2rem" }}>

                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28731.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMO SVS 3000</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 70.0755
                               </Card.Text>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        Сетевое программное обеспечение для визуализации технологических процессов
                                      </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                </Card.Footer>
                            </Card>
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative",opacity:"0"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28731.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMO SVS 3000</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 70.0755
                               </Card.Text>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        Сетевое программное обеспечение для визуализации технологических процессов
                                      </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                </Card.Footer>
                            </Card>



                        </CardDeck>
                    </Col>
                </Row>
        
                 </Container>
        </div>
    );
};

export default PoPage;