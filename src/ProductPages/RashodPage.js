import React from 'react';
import { Container, Card, Button, Row, Col, CardDeck } from 'react-bootstrap';
import SideBar from '../components/SideBar'
import p02ru from '../profiles/rashodf/dtrans_p02ru.pdf';
import p02kz from '../profiles/rashodf/dtrans_p02kz.pdf';
import p20ru from '../profiles/rashodf/dtrans_p20ru.pdf';
import p20kz from '../profiles/rashodf/dtrans_p20kz.pdf';
import p20dru from '../profiles/rashodf/dtrans_p20dru.pdf';



function RashodPage(props) {

    return (

        <div style={{ color: "#233048" }}>


            <Container fluid={true} >

                <CardDeck style={{ marginTop: "2rem" }}>
                    <div style={{ top: "0" }}>
                    <SideBar />
                    </div>
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
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>
                                Интеллектуальный преобразователь давления JUMO dTRANS p02 DELTA предназначен для измерения
                            разности давлений газов,  паров и жидкостей, а так же измерения расхода,
                                      уровня в закрытых емкостях и измерения малых значений избыточного давления.
                                      </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>
                                
                                <ul style={{ listStyle: "none" }}>
                                    <li>Сенсор: мембрана из нерж. стали, пьезорезистивный принцип измерения</li>
                                    <li>Диапазоны измерения: -60…+60 мбар ; -250…250 мбар, -1…1 бар, -1…4 бар, -1…25 бар DP</li>
                                    <li>Перенастройка диапазона измерений: до 100:1</li>
                                    <li>Выходной сигнал: 4-20 мА + HART</li>
                                    <li> Погрешность: 0,5%; 0,2%; 0,1%</li>
                                    <li>Межповерочный интервал: до 4 лет</li>
                                    <li>Температура измеряемой среды: -40...+120°С</li>
                                    <li>Температура окружающей среды: -50...+85°С</li>
                                    <ul>Конструктивное исполнение:
                                        <li>стандартное, IP 65</li>
                                        <li>искробезопасное (Ex ia), IP 65</li>
                                        <li>взрывонепроницаемая оболочка (Ex d), IP 65</li>
                                    </ul>
                                        <li>Корпус: из алюминия, с кнопками управления под крышкой, с ЖК-дисплеем.</li>
                                     <ul>Подключение к процессу:
                                            <li>2х 1/4” NPT</li>
                                            <li>мембранный разделитель по DIN/ANSI</li>
                                        </ul>
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

                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294983341.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO dTRANS p20 DELTA Ex d</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 40.3023
                               </Card.Text>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>
                                Интеллектуальный преобразователь давления JUMO dTRANS p20 DELTA Ex d предназначен
                                 для измерения во взрывоопасных зонах разности давлений газов, паров и жидкостей,
                                 а так же измерения расхода, уровня в закрытых емкостях и измерения малых значений избыточного давления.
                                      </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li>Сенсор: кремниевый сенсор с мембраной из нерж. стали</li>
                                    <li>Диапазоны измерения: -10…+10 мбар ; -1…1 бар, 0…1 бар, -1…6 бар, -1…100 бар DP</li>
                                    <li>Перенастройка диапазона измерений: до 400:1</li>
                                    <li>Выходной сигнал: 4-20 мА + HART</li>
                                    <li>Погрешность: 0,5%; 0,2%; 0,1%; 0,07% (спец. калибровка)</li>
                                    <li>Межповерочный интервал: до 4 лет</li>
                                    <li>Температура измеряемой среды: -40...+110°С</li>
                                    <li>Температура окружающей среды: -50...+85°С</li>
                                    <li>Конструктивное исполнение: взрывонепроницаемая оболочка (Ex d), IP 66</li>
                                    <li>Корпус: прецизионное литье 1.4408, с поворотной кнопкой управления и с ЖК-дисплеем (или без них)</li>
                                    <li>Подключение к процессу: 2х 1/4” NPT мембранный разделитель по DIN/ANSI</li>
                                </ul>
                                <br></br>
                                <br></br>
                                <br></br>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >
                            <Row  >
                                <Col className="p-0 d-flex justify-content-start">
                                    <a href={p20ru} target="_blank" rel="noopener noreferrer" download
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
                                    <a href={p20kz} target="_blank" rel="noopener noreferrer" download
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
                <CardDeck style={{height:"100%",width:"40%"}}>
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981188.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO dTRANS p20 DELTA</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 40.3022
                               </Card.Text>
                               <Card.Text>
                                Интеллектуальный преобразователь давления JUMO dTRANS p20 DELTA
                                 предназначен для измерения разности давлений газов, паров и жидкостей,
                                 а так же измерения расхода, уровня в закрытых емкостях и измерения малых значений избыточного давления.
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li>Сенсор: кремниевый сенсор с мембраной из нерж. стали</li>
                                    <li>Диапазоны измерения: -10…+10 мбар ; -1…1 бар, 0…1 бар, -1…6 бар, -1…100 бар DP</li>
                                    <li>Перенастройка диапазона измерений: до 400:1</li>
                                    <li>Выходной сигнал: 4-20 мА или 4-20 мА + HART</li>
                                    <li>Погрешность: 0,5%; 0,2%; 0,1%; 0,07% (спец. калибровка)</li>
                                    <li>Межповерочный интервал: до 4 лет</li>
                                    <li>Температура измеряемой среды: -40...+110°С</li>
                                    <li>Температура окружающей среды: -50...+85°С</li>
                                    <ul>Конструктивное исполнение:
                                        <li>стандартное, IP 67</li>
                                        <li>искробезопасное (Ex ia), IP 66</li>
                                    </ul>
                                    <li>Корпус: из нерж. стали, модульная конструкция, 
                                        стандартное или компактное исполнение, с поворотной кнопкой управления
                                         и с ЖК-дисплеем (или без них)</li>
                                    <ul>Подключение к процессу:
                                        <li>2х 1/4” NPT</li>
                                        <li>мембранный разделитель по DIN/ANSI</li>
                                    </ul>
                                </ul>
                                <br></br>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >
                                                       <a href={p20dru} target="_blank" rel="noopener noreferrer" download
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
};

export default RashodPage;