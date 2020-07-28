import React from 'react';
import { Container, Card, Button, Row, Col, CardDeck } from 'react-bootstrap';
import SideBar from '../components/SideBar'
import p02ru from '../profiles/rashodf/dtrans_p02ru.pdf';
import p02kz from '../profiles/rashodf/dtrans_p02kz.pdf';




function RashodPage(props) {

    return (

        <div style={{ color: "#233048" }}>


            <Container fluid={true} >
                <Row>
                    <Col xl={3} style={{ marginTop: "1.5rem" }}>
                        <SideBar />
                    </Col>
                    <Col xl={9} style={{ marginTop: "2rem" }}>
                    <CardDeck>
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
                                        Тип: 40.4382
                               </Card.Text>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                        Интеллектуальный преобразователь давления JUMO dTRANS p02 DELTA предназначен для измерения
                                        разности давлений газов,  паров и жидкостей, а так же измерения расхода,
                                        уровня в закрытых емкостях и измерения малых значений избыточного давления.
                                      </Card.Text>
                                    <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                        Технические характеристики
                                </Card.Title>
                                    <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>

                                        <ul style={{ listStyle: "none" }}>
                                            <li>Сенсор: мембрана из нерж. стали, пьезорезистивный принцип измерения</li>
                                            <li>Диапазоны измерения: -60…+60 мбар ; -250…250 мбар, -1…1 бар, -1…4 бар, -1…25 бар DP</li>
                                            <li>Перенастройка диапазона измерений: до 100:1</li>
                                            <li>Выходной сигнал: 4-20 мА + HART</li>
                                            <li> Погрешность: 0,5%; 0,2%; 0,1%</li>
                                            <li>Межповерочный интервал: до 4 лет</li>
                                            <li>Температура измеряемой среды: -40...+120°С</li>
                                            <li>Температура окружающей среды: -50...+85°С</li>
                                            
                                            <li>Корпус: из алюминия, с кнопками управления под крышкой, с ЖК-дисплеем.</li>
                                            
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className=" justify-content-between p-3" >
                                    <Row  >
                                        <Col className="p-0 d-flex justify-content-start">
                                            <a href={p02ru} target="_blank" rel="noopener noreferrer" download
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
                                            <a href={p02kz} target="_blank" rel="noopener noreferrer" download
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
                            <Card style={{opacity:"0"}}></Card>
                    </CardDeck>
                        </Col>
                        </Row>
               
                   
             </Container>
        </div>
    );
};

export default RashodPage;