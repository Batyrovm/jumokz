import React from 'react';
import { Container, Card, Button, CardDeck,Col,Row } from 'react-bootstrap';
import SideBar from '../components/SideBar'

import et1 from '../profiles/etf/etron_t.pdf';
import et2 from '../profiles/etf/etron_m.pdf';
import et3 from '../profiles/etf/tb_tw.pdf';




function EtPage(props) {

    return (

        <div style={{ color: "#233048" }}>


            <Container fluid={true} >
                <Row>
                    <Col xl={3} style={{ marginTop: "1.5rem" }}>
                        <SideBar />
                    </Col>
                    <Col xl={9} style={{ marginTop: "2rem" }}>
                        <CardDeck >

                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294972403.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>ecoTRON T</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 70.1050
                               </Card.Text>

                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>

                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Цифровой термостат с ЖК-индикатором для монтажа на DIN-рейку</Card.Text>
                                        </ul>
                                       
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >

                                    <a href={et1} target="_blank" rel="noopener noreferrer" download
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
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294979651.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>ecoTRON M</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 70.1060
                               </Card.Text>

                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Электронный микростат в формате 76х36 мм</Card.Text>
                                        </ul>
                                        

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >

                                    <a href={et2} target="_blank" rel="noopener noreferrer" download
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
                            
                        </CardDeck>
                        <CardDeck>
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294985174.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>safetyM TB/TW</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 70.1160
                               </Card.Text>

                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Температурный ограничитель / контроллер с ЖК-дисплеем
                                         для установки на DIN рейку 35 мм в соответствии со стандартом DIN EN 14 597</Card.Text>
                                        </ul>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <a href={et3} target="_blank" rel="noopener noreferrer" download
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
                                width: "300px", display: "flex", justifyContent: "center", position: "relative",opacity:"0"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294985174.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>safetyM TB/TW</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 70.1160
                               </Card.Text>

                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <Card.Text>Температурный ограничитель / контроллер с ЖК-дисплеем
                                         для установки на DIN рейку 35 мм в соответствии со стандартом DIN EN 14 597</Card.Text>
                                        </ul>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <a href={et3} target="_blank" rel="noopener noreferrer" download
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
                        </CardDeck>
                        </Col>
                        </Row>

               
                
            </Container>
        </div>
    );
};

export default EtPage;