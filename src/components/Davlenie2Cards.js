import React from 'react';
import { Container, Card, Button, CardDeck, Row, Col } from 'react-bootstrap';

import d1ru from '../profiles/davlenief/card2f/d1ru.pdf';
import d1kz from '../profiles/davlenief/card2f/d1kz.pdf';
import d2ru from '../profiles/davlenief/card2f/d2ru.pdf';
import d2kz from '../profiles/davlenief/card2f/d2kz.pdf';
import d3ru from '../profiles/davlenief/card2f/d3ru.pdf';
import d4ru from '../profiles/davlenief/card2f/d4ru.pdf';
import d4kz from '../profiles/davlenief/card2f/d4kz.pdf';
import d5ru from '../profiles/davlenief/card2f/d5ru.pdf';
import d5kz from '../profiles/davlenief/card2f/d5kz.pdf';
import d6ru from '../profiles/davlenief/card2f/d6ru.pdf';








function Davlenie2Cards(props) {
    return (
        <div>
            <Container fluid={true} >
                <h1 style={{ textAlign: "center", color: "#233048" }}>Преобразователи давления интеллектуальные</h1>
                <CardDeck >
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987670.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO dTRANS p02</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  40.4385
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Предназначение: для измерения избыточного или абсолютного давления</li>
                                        <ul>Верхние пределы измерений:
                                            <li>от 0,6 до 600 бар (отн. давление)</li>
                                            <li>от 0,6 до 25 бар (абс. давление)</li>
                                        </ul>
                                        <li>Выходной сигнал: 4-20 мА + HART</li>
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <Row>
                                <Col className="p-0 d-flex justify-content-start">
                                    <a href={d1ru} target="_blank" rel="noopener noreferrer" download
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
                                    <a href={d1kz} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967887.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO dTRANS p02 KERAMIK </h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  40.4387
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Предназначение:для измерения избыточного или абсолютного давления</li>
                                        <ul>Верхние пределы измерений:
                                            <li>от 0,1 до 25 бар (отн. давление)</li>
                                            <li>от 0,6 до 25 бар (абс. давление)</li>
                                        </ul>
                                        <li>Выходной сигнал: 4-20 мА + HART</li>
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >


                            <Row>
                                <Col className="p-0 d-flex justify-content-start">
                                    <a href={d2ru} target="_blank" rel="noopener noreferrer" download
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
                                    <a href={d2kz} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976989.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO dTRANS p20</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  40.3025
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Предназначение:для измерения избыточного или абсолютного давления</li>
                                        <ul>Верхние пределы измерений:
                                            <li>от 0,6 до 600 бар (отн. давление)</li>
                                            <li>от 0,6 до 100 бар (абс. давление)</li>
                                        </ul>
                                        <li>Выходной сигнал: 4-20 мА или 4-20 мА + HART </li>
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            
                                    <a href={d3ru} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294983342.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO dTRANS p20 Ex d </h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  40.3026
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Предназначение: для измерения избыточного или абсолютного давления</li>
                                        <ul>Верхние пределы измерений:
                                            <li>от 0,6 до 600 бар (отн. давление)</li>
                                            <li>от 0,6 до 100 бар (абс. давление)</li>
                                        </ul>
                                        <li>Выходной сигнал: 4-20 мА + HART</li>
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >


                            <Row>
                                <Col className="p-0 d-flex justify-content-start">
                                    <a href={d4ru} target="_blank" rel="noopener noreferrer" download
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
                                    <a href={d4kz} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987380.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO dTRANS p02 DELTA</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  40.4382
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Предназначение: для измерения давления, разности давлений, расхода или уровня</li>
                                        <ul>Верхние пределы измерений:
                                            <li>от 0,06 до 25 бар DP</li>
                                            
                                        </ul>
                                        <li>4-20 мА + HART</li>
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <Row>
                                <Col className="p-0 d-flex justify-content-start">
                                    <a href={d5ru} target="_blank" rel="noopener noreferrer" download
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
                                    <a href={d5kz} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981188.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO dTRANS p20 DELTA </h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  40.3022
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Предназначение:для измерения давления, разности давлений, расхода или уровня</li>
                                        <ul>Верхние пределы измерений:
                                            <li>от 0,01 до 100 бар DP</li>
                                           
                                        </ul>
                                        <li>4-20 мА или 4-20 мА + HART</li>
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                                    <a href={d6ru} target="_blank" rel="noopener noreferrer" download
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
            </Container>
        </div>
    );
}
export default Davlenie2Cards;