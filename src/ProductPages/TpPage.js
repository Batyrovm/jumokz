import React from 'react';
import { Container, Card, Button, Row, Col, CardDeck } from 'react-bootstrap';
import SideBar from '../components/SideBar'
import tp1ru from '../profiles/tpf/t01ru.pdf';
import tp1kz from '../profiles/tpf/t01kz.pdf';
import tp2ru from '../profiles/tpf/t02ru.pdf';
import tp2kz from '../profiles/tpf/t02kz.pdf';
import tp3ru from '../profiles/tpf/t03ru.pdf';
import tp3kz from '../profiles/tpf/t03kz.pdf';
import tp4ru from '../profiles/tpf/t04ru.pdf';
import tp4kz from '../profiles/tpf/t04kz.pdf';
import wtbru from '../profiles/tpf/wtrans_bru.pdf';
import wtbkz from '../profiles/tpf/wtrans_bkz.pdf';
import tp5ru from '../profiles/tpf/t05ru.pdf';
import tp5kz from '../profiles/tpf/t05kz.pdf';
import tp6ru from '../profiles/tpf/t06ru.pdf';
import tp6kz from '../profiles/tpf/t06kz.pdf';



function TpPage(props) {

    return (

        <div style={{ color: "#233048" }}>


            <Container fluid={true} >
                <Row>
                    <Col xl={3} style={{ marginTop: "1.5rem" }}>
                    <SideBar/>
                    </Col>
                    <Col xl={9} style={{ marginTop: "2rem" }}>
                        <CardDeck >
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28739.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMO dTRANS T01 / Т01Т</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип:70.7010
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>Программируемый двухпроводный измерительный преобразователь
                                                <li>выходной сигнал 4-20 mA  + инверсное исполнение </li>
                                                <li>монтаж в присоединительную головку / на несущую шину</li>
                                                <li>линеаризация по спецификации заказчика (кроме модели 707014/…)</li>
                                                <li>гальванически развязанный вход и выход</li>
                                                <li>бюджетная модель 707014/…</li>
                                                <li>свободно программируемый измерительный диапазон</li>
                                            </ul>
                                            

                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row  >
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={tp1ru} target="_blank" rel="noopener noreferrer" download
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
                                            <a href={tp1kz} target="_blank" rel="noopener noreferrer" download
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
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28740.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMО dTRANS T02</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 70.7020
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>Программируемый  измерительный преобразователь
                                                <li>выходной сигнал 0/4…20 мА или 0/2…10В + инверсное исполнение</li>
                                                <li>монтаж на несущую DIN рейку</li>
                                                <li>линеаризация по спецификации заказчика</li>
                                                <li>гальванически развязанный вход и выход</li>
                                                <li>дискретные выходы (только для типов 707021/... и 707022/...</li>
                                                <li>свободно программируемый измерительный диапазо</li>
                                            </ul>
                                        </ul>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row  >
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={tp2ru} target="_blank" rel="noopener noreferrer" download
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
                                            <a href={tp2kz} target="_blank" rel="noopener noreferrer" download
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
                        <CardDeck style={{
                            marginTop: "2rem",marginBottom: "1rem"
                        }}>
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28741.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMО dTRANS T03 J, B, T</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип:70.7030
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>Аналоговый двухпроводный измерительный преобразователь
                                            с цифровой настройкой JUMO dTRANS T03 BU, TU.
                                            <li>для подключения к термометру сопротивления Pt100</li>
                                                <li>
                                                </li></ul>
                                            <p>Предназначенный для промышленного использования двухпроводный
                                            измерительный преобразователь получает значение температуры с
                                            помощью термометра сопротивления Pt100 по двух-или трехпроводной схеме
                                            подключения, затем это значение преобразует в выходной сигнал 4…20 мА или 0…10 В,
                                             который линейно зависит от температуры.</p>
                                        </ul>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row  >
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={tp3ru} target="_blank" rel="noopener noreferrer" download
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
                                            <a href={tp3kz} target="_blank" rel="noopener noreferrer" download
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
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294970772.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMO dTRANS T04</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 70.7040
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>Четырехпроводной измерительный преобразователь с
                                            настройкой DIP-переключателями / Setup-программой.
                                             <li>для подключения к термометру сопротивления Pt100, Pt1000 или потенциометру</li>
                                                <li>для монтажа на рейку в щитах управления</li>
                                            </ul>
                                            <p>Преобразователи предназначены для промышленного применения и используются
                                            для измерения температуры или сопротивления от термометров сопротивления Pt100,
                                              Pt1000 или потенциометров по двух-или трехпроводной схеме подключения.</p>
                                        </ul>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row  >
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={tp4ru} target="_blank" rel="noopener noreferrer" download
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
                                            <a href={tp4kz} target="_blank" rel="noopener noreferrer" download
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
                        <CardDeck style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28742.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMO Wtrans B</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 70.7060
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>Беспроводной измерительный преобразователь
                                            <li>радиус передачи до 300м; ISM-диапазон 868,4 МГц (Европа)</li>
                                                <li>монтаж в присоединительную головку</li>
                                                <li>линеаризация по спецификации заказчика</li>
                                                <li>свободно программируемый измерительный диапазон</li>
                                            </ul>
                                        </ul>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row  >
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={wtbru} target="_blank" rel="noopener noreferrer" download
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
                                            <a href={wtbkz} target="_blank" rel="noopener noreferrer" download
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
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981272.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMO dTRANS T05</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип: 70.7050
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>Программируемый двухпроводный измерительный преобразователь
                                            <li>выходной сигнал 4…20 мА или 0…10В</li>
                                                <li>монтаж в присоединительную головку / на DIN рейку</li>
                                                <li>линеаризация по спецификации заказчика</li>
                                                <li>гальванически развязанный вход и выход</li>
                                                
                                            </ul>
                                        </ul>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row  >
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={tp5ru} target="_blank" rel="noopener noreferrer" download
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
                                            <a href={tp5kz} target="_blank" rel="noopener noreferrer" download
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
                        <CardDeck >
                            <Card style={{
                                backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                                width: "300px", display: "flex", justifyContent: "center", position: "relative"
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28743.png?downsize=*:475px"
                                        style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                        <h3>JUMO dTRANS T07</h3>
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Тип:70.7080
                               </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        <ul style={{ listStyle: "none" }}>
                                            <ul>
                                                <li>Устройства серии JUMO dTRANS T07 представляют собой двухпроводные 
                                                    измерительные преобразователи температуры </li>
                                                
                                            </ul>


                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row  >
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={tp6ru} target="_blank" rel="noopener noreferrer" download
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
                                            <a href={tp6kz} target="_blank" rel="noopener noreferrer" download
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
        </div>
    );
};

export default TpPage;