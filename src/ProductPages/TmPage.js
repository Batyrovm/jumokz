import React from 'react';
import { Container, Card, Image, Button, Row, Col } from 'react-bootstrap';
import SideBar from '../components/SideBar'
import file1 from '../files/1_statia.pdf';




function TmPage(props) {

    return (

        <div content="width=device-width" style={{ margin: "auto", minWidth: "1000px", maxWidth: "100%", padding: "0" }}>


            <Container >
                <Row>
                    <Col>
                        <SideBar />
                    </Col>
                    <Col xs={6}>


                        <h1 style={{ textAlign: "center", color: "#233048", marginTop: "2rem" }}>Тиристорные модули</h1>
                        <ul style={{ listStyle: "none" }}>
                            <li>
                                <Card style={{
                                    backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "500px",
                                    width: "600px", display: "flex", justifyContent: "center"
                                }}>
                                    <Row style={{ margin: "auto" }}>
                                        <Col>

                                            <Image variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28712.png?downsize=*:297px"
                                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />

                                        </Col>
                                        <Col style={{ marginRight: "2rem", textAlign: "center" }}>

                                            <Card.Body>
                                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                                    <h3>Встроенный термостат</h3>
                                                </Card.Title>
                                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                                    Тип серии EM до 500 ° C
                               </Card.Text>

                                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                                    Основной тип: 602021
                                </Card.Text>

                                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                                    <ul style={{ listStyle: "none" }}>
                                                        <li>Материал: нержавеющая сталь / медь</li>
                                                        <li>Максимум. Междугородняя линия: 5000 мм</li>
                                                        <li>Диапазон регулирования: до 500 ° C</li>
                                                    </ul>
                                                </Card.Title>

                                            </Card.Body>
                                        </Col>



                                    </Row>
                                    <Card.Footer>

                                        <Row >
                                            <Col>
                                            </Col>
                                            <Col>
                                                <a href={file1} target="_blank" rel="noopener noreferrer" download
                                                    style={{ color: "#233048" }}  >
                                                    <Button>
                                                        <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                                                </a>
                                            </Col>
                                            <Col>
                                                <p style={{ textAlign: "center", justifyContent: "center", alignSelf: "center" }}>
                                                    <Button style={{
                                                        backgroundColor: "#50e3c2",
                                                        color: "#203367", alignItems: "center", borderColor: "#50e3c2",
                                                        borderRadius: "10px"
                                                    }}>Подробнее</Button>
                                                </p>
                                            </Col>


                                        </Row>
                                    </Card.Footer>

                                </Card>
                            </li>
                            <li>
                                <Card style={{
                                    backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "500px",
                                    width: "600px", display: "flex", justifyContent: "center"
                                }}>
                                    <Row style={{ margin: "auto" }}>
                                        <Col>

                                            <Image variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28712.png?downsize=*:297px"
                                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />

                                        </Col>
                                        <Col style={{ marginRight: "2rem", textAlign: "center" }}>

                                            <Card.Body>
                                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                                    <h3>Встроенный термостат</h3>
                                                </Card.Title>
                                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                                    Тип серии EM до 500 ° C
                               </Card.Text>

                                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                                    Основной тип: 602021
                                </Card.Text>

                                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                                    <ul style={{ listStyle: "none" }}>
                                                        <li>Материал: нержавеющая сталь / медь</li>
                                                        <li>Максимум. Междугородняя линия: 5000 мм</li>
                                                        <li>Диапазон регулирования: до 500 ° C</li>
                                                    </ul>
                                                </Card.Title>

                                            </Card.Body>
                                        </Col>



                                    </Row>
                                    <Card.Footer>

                                        <Row >
                                            <Col>
                                            </Col>
                                            <Col>
                                                <a href={file1} target="_blank" rel="noopener noreferrer" download
                                                    style={{ color: "#233048" }}  >
                                                    <Button>
                                                        <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                                                </a>
                                            </Col>
                                            <Col>
                                                <p style={{ textAlign: "center", justifyContent: "center", alignSelf: "center" }}>
                                                    <Button style={{
                                                        backgroundColor: "#50e3c2",
                                                        color: "#203367", alignItems: "center", borderColor: "#50e3c2",
                                                        borderRadius: "10px"
                                                    }}>Подробнее</Button>
                                                </p>
                                            </Col>


                                        </Row>
                                    </Card.Footer>

                                </Card>
                            </li>
                        </ul>

                    </Col>

                    <Col>
                    </Col>
                </Row>



            </Container>
        </div>
    );
};

export default TmPage;