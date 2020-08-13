import React from 'react';
import { Container, Card, Button, Row, Col, CardDeck } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import reg1ru from '../profiles/registratoryf/logoscreen1.pdf';
import reg2ru from '../profiles/registratoryf/logoscreen2ru.pdf';
import reg2kz from '../profiles/registratoryf/logoscreen2kz.pdf'; 
import reg3ru from '../profiles/registratoryf/reg3ru.pdf';
import reg3kz from '../profiles/registratoryf/reg3kz.pdf'; 
import reg4kz from '../profiles/registratoryf/reg4kz.pdf';

import reg5ru from '../profiles/registratoryf/logoscreen2ru.pdf';
import reg5kz from '../profiles/registratoryf/logoscreen2kz.pdf'; 




function RegulyatoryPage(props) {

    return (

        <Container fluid={true}>

            <Row >
                <Col xl={3} style={{ marginTop: "1.5rem" }}>
                    <SideBar />
                </Col>
                <Col xl={9} style={{ marginTop: "2rem" }} >

                    <CardDeck >
                        <Card style={{
                            backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                            width: "300px", display: "flex", justifyContent: "center", position: "relative"
                        }}>
                            <Card.Body>
                                <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981336.png?downsize=*:475px"
                                    style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                    <h3>JUMO LOGOSCREEN fd</h3>
                                </Card.Title>
                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Тип:70.6585
                               </Card.Text>
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Технические характеристики
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                    <ul style={{ listStyle: "none" }}>
                                        <Card.Text>Экранный самописец с CompactFlash-картой для хранения данных</Card.Text>
                                    </ul>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" justify-content-between p-3" >

                                <a href={reg1ru} target="_blank" rel="noopener noreferrer" download
                                    style={{ color: "#233048" }}  >
                                    <Button style={{
                                        backgroundColor: "#50e3c2",
                                        color: "#203367", borderColor: "#50e3c2",
                                        borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                    }}>
                                        <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                                </a>



                            </Card.Footer>

                        </Card>

                        <Card style={{
                            backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                            width: "300px", display: "flex", justifyContent: "center", position: "relative"
                        }}>
                            <Card.Body>
                                <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294971454.png?downsize=*:475px"
                                    style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                    <h3>JUMO LOGOSCREEN nt</h3>
                                </Card.Title>
                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Тип: 70.6581
                               </Card.Text>
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Технические характеристики
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                    <ul style={{ listStyle: "none" }}>
                                        <Card.Text>Безбумажный самописец с TFT-дисплеем и CompactFlash-картой</Card.Text>
                                    </ul>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" justify-content-between p-3" >
                                 <Row>
                                    <Col className="p-0 d-flex justify-content-start"> 
                                    <a href={reg2ru} target="_blank" rel="noopener noreferrer" download
                                        style={{ color: "#233048" }}  >
                                        <Button style={{
                                            backgroundColor: "#50e3c2",
                                            color: "#203367", borderColor: "#50e3c2",
                                            borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                        }}>
                                            <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                                    </a>
                                    </Col> 
                                    <Col className="p-0 d-flex justify-content-end">
                                        <a href={reg2kz} target="_blank" rel="noopener noreferrer" download
                                            style={{ color: "#233048" }}  >
                                            <Button style={{
                                                backgroundColor: "#50e3c2",
                                                color: "#203367", borderColor: "#50e3c2",
                                                borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                            }}>
                                                <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                        </a>
                                    </Col>
                                 </Row>
                               


                            </Card.Footer>

                        </Card>
                    </CardDeck>
                    {/*row2 */}
                    <CardDeck >
                        <Card style={{
                            backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                            width: "300px", display: "flex", justifyContent: "center", position: "relative"
                        }}>
                            <Card.Body>
                                <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294988939.png?downsize=*:475px"
                                    style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                    <h3>JUMO LOGOSCREEN 600</h3>
                                </Card.Title>
                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Тип:70.6520
                               </Card.Text>
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Технические характеристики
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                    <ul style={{ listStyle: "none" }}>
                                      <p>Экранный регистратор данных LOGOSCREEN 600 оснащен резистивным сенсорным 
                                          экраном и отличается удобством обслуживания благодаря интуитивно понятной.
                                      </p>
                                    </ul>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" justify-content-between p-3" >
                                <Row  >
                                    <Col className="p-0 d-flex justify-content-start">
                                        <a href={reg3ru} target="_blank" rel="noopener noreferrer" download
                                            style={{ color: "#233048" }}  >
                                            <Button style={{
                                                backgroundColor: "#50e3c2",
                                                color: "#203367", borderColor: "#50e3c2",
                                                borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                            }}>
                                                <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                                        </a>

                                    </Col>
                                    <Col className="p-0 d-flex justify-content-end" >
                                        <a href={reg3kz} target="_blank" rel="noopener noreferrer" download
                                            style={{ color: "#233048" }}  >
                                            <Button style={{
                                                backgroundColor: "#50e3c2",
                                                color: "#203367", borderColor: "#50e3c2",
                                                borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                            }}>
                                                <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                        </a>

                                    </Col>
                                </Row>

                            </Card.Footer>

                        </Card>

                        <Card style={{
                            backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                            width: "300px", display: "flex", justifyContent: "center", position: "relative"
                        }}>
                            <Card.Body>
                                <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294996612.png?downsize=*:475px"
                                    style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                    <h3>JUMO LOGOSCREEN 601</h3>
                                </Card.Title>
                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Тип:70.6521
                               </Card.Text>
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Технические характеристики
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                    <ul style={{ listStyle: "none" }}>
                                        <p>JUMO LOGOSCREEN 601 экрандық тіркегіші резистивті сенсорлы экранмен жабдықталған
                                            және ол, қарапайым таңбаларды пайдалануымен, бейнелеу мен басқарудың бір
                                    қарағанда түсінікті.
                                        </p>
                                    </ul>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" justify-content-between p-3" >
                                <Row  >
                                    
                                    <Col className="p-0 d-flex justify-content-end" >
                                        <a href={reg4kz} target="_blank" rel="noopener noreferrer" download
                                            style={{ color: "#233048" }}  >
                                            <Button style={{
                                                backgroundColor: "#50e3c2",
                                                color: "#203367", borderColor: "#50e3c2",
                                                borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                            }}>
                                                <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                        </a>

                                    </Col>
                                </Row>

                            </Card.Footer>

                        </Card>

                    </CardDeck>
                    {/*row3 */}
                    <CardDeck >
                        <Card style={{
                            backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                            width: "300px", display: "flex", justifyContent: "center", position: "relative"
                        }}>
                            <Card.Body>
                                <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995814.png?downsize=*:475px"
                                    style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                    <h3>JUMO LOGOSCREEN 700</h3>
                                </Card.Title>
                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Тип:70.6530
                               </Card.Text>
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Технические характеристики
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                    <ul style={{ listStyle: "none" }}>
                                        <p>Экранный регистратор данных JUMO LOGOSCREEN 700 отличается удобством и простотой
                                        использования благодаря его интуитивно понятной концепции управления и визуализации на
                                               основе пиктограмм. </p>
                                    </ul>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" justify-content-between p-3" >
                                <Row  >
                                    <Col className="p-0 d-flex justify-content-start">
                                        <a href={reg5ru} target="_blank" rel="noopener noreferrer" download
                                            style={{ color: "#233048" }}  >
                                            <Button style={{
                                                backgroundColor: "#50e3c2",
                                                color: "#203367", borderColor: "#50e3c2",
                                                borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                            }}>
                                                <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                                        </a>

                                    </Col>
                                    <Col className="p-0 d-flex justify-content-end" >
                                        <a href={reg5kz} target="_blank" rel="noopener noreferrer" download
                                            style={{ color: "#233048" }}  >
                                            <Button style={{
                                                backgroundColor: "#50e3c2",
                                                color: "#203367", borderColor: "#50e3c2",
                                                borderRadius: "10px", width: "150px", fontSize: "12px", padding: "0"
                                            }}>
                                                <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                        </a>

                                    </Col>
                                </Row>

                            </Card.Footer>

                        </Card>

                        <Card style={{
                            backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                            width: "300px", display: "flex", justifyContent: "center", position: "relative",opacity:"0"
                        }}>

                        </Card>

                    </CardDeck>


                </Col>
            </Row>


        </Container>
    );
};

export default RegulyatoryPage;