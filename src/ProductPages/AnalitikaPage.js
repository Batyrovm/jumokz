import React from 'react';
import { Container, Card,  Button, Row, Col,CardDeck } from 'react-bootstrap';
import SideBar from '../components/SideBar'
import file1 from '../files/1_statia.pdf';




function AnalitikaPage(props) {

    return (

        <div content="width=device-width" style={{ margin: "auto", minWidth: "1000px", maxWidth: "100%", padding: "0" }}>


            <Container fluid={true} >
                
                <CardDeck style={{marginTop:"2rem"}}>
                    <SideBar />
                    <Card  style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "700px",
                        width: "300px", display: "flex", justifyContent: "center"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28712.png?downsize=*:297px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
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
                         <Card.Footer>
                             <Row>
                             <Col>
                              <a href={file1} target="_blank" rel="noopener noreferrer" download
                                        style={{ color: "#233048"  }}  >
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", textAlign:"left", borderColor: "#50e3c2",
                                    borderRadius: "10px"
                                }}>
                                            <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                                    </a>

                            </Col>
                            <Col>
                            <a href={file1} target="_blank" rel="noopener noreferrer" download
                                style={{ color: "#233048" }}  >
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367",  borderColor: "#50e3c2",
                                    borderRadius: "10px",textAlign:"right"
                                }} >
                                    <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                            </a>
                                
                            </Col>
                            </Row>
                           
                        </Card.Footer>

                    </Card>
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "700px",
                        width: "300px", display: "flex", justifyContent: "center"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28712.png?downsize=*:297px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
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
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <a href={file1} target="_blank" rel="noopener noreferrer" download
                                        style={{ color: "#233048" }}  >
                                        <Button style={{
                                            backgroundColor: "#50e3c2",
                                            color: "#203367", textAlign: "left", borderColor: "#50e3c2",
                                            borderRadius: "10px"
                                        }}>
                                            <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                                    </a>

                                </Col>
                                <Col>
                                    <a href={file1} target="_blank" rel="noopener noreferrer" download
                                        style={{ color: "#233048" }}  >
                                        <Button style={{
                                            backgroundColor: "#50e3c2",
                                            color: "#203367", borderColor: "#50e3c2",
                                            borderRadius: "10px", textAlign: "right"
                                        }} >
                                            <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                    </a>

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>
                   
                </CardDeck>
                <CardDeck style={{ marginTop: "2rem" }}>
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "700px",
                        width: "300px", display: "flex", justifyContent: "center"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28712.png?downsize=*:297px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
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
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <a href={file1} target="_blank" rel="noopener noreferrer" download
                                        style={{ color: "#233048" }}  >
                                        <Button style={{
                                            backgroundColor: "#50e3c2",
                                            color: "#203367", textAlign: "left", borderColor: "#50e3c2",
                                            borderRadius: "10px"
                                        }}>
                                            <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                                    </a>

                                </Col>
                                <Col>
                                    <a href={file1} target="_blank" rel="noopener noreferrer" download
                                        style={{ color: "#233048" }}  >
                                        <Button style={{
                                            backgroundColor: "#50e3c2",
                                            color: "#203367", borderColor: "#50e3c2",
                                            borderRadius: "10px", textAlign: "right"
                                        }} >
                                            <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                    </a>

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "700px",
                        width: "300px", display: "flex", justifyContent: "center"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28712.png?downsize=*:297px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
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
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <a href={file1} target="_blank" rel="noopener noreferrer" download
                                        style={{ color: "#233048" }}  >
                                        <Button style={{
                                            backgroundColor: "#50e3c2",
                                            color: "#203367", textAlign: "left", borderColor: "#50e3c2",
                                            borderRadius: "10px"
                                        }}>
                                            <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                                    </a>

                                </Col>
                                <Col>
                                    <a href={file1} target="_blank" rel="noopener noreferrer" download
                                        style={{ color: "#233048" }}  >
                                        <Button style={{
                                            backgroundColor: "#50e3c2",
                                            color: "#203367", borderColor: "#50e3c2",
                                            borderRadius: "10px", textAlign: "right"
                                        }} >
                                            <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                    </a>

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "700px",
                        width: "300px", display: "flex", justifyContent: "center"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28712.png?downsize=*:297px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
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
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <a href={file1} target="_blank" rel="noopener noreferrer" download
                                        style={{ color: "#233048" }}  >
                                        <Button style={{
                                            backgroundColor: "#50e3c2",
                                            color: "#203367", textAlign: "left", borderColor: "#50e3c2",
                                            borderRadius: "10px"
                                        }}>
                                            <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                                    </a>

                                </Col>
                                <Col>
                                    <a href={file1} target="_blank" rel="noopener noreferrer" download
                                        style={{ color: "#233048" }}  >
                                        <Button style={{
                                            backgroundColor: "#50e3c2",
                                            color: "#203367", borderColor: "#50e3c2",
                                            borderRadius: "10px", textAlign: "right"
                                        }} >
                                            <i className="fas fa-download" />
                                             Скачать на казахском
                                       </Button>

                                    </a>

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>

                </CardDeck>
                
               
                    

            </Container>
        </div>
    );
};

export default AnalitikaPage;