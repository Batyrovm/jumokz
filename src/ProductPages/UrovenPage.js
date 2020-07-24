import React from 'react';
import { Container, Card, Button, Row, Col, CardDeck } from 'react-bootstrap';
import SideBar from '../components/SideBar'
import s25ru from '../profiles/urovenf/maera_s25ru.pdf';
import s25kz from '../profiles/urovenf/maera_25kz.pdf';
import s26ru from '../profiles/urovenf/maera_s26ru.pdf';
import s26kz from '../profiles/urovenf/maera_s26kz.pdf';
import f27ru from '../profiles/urovenf/maera_f27ru.pdf';
import f27kz from '../profiles/urovenf/maera_f27kz.pdf';
import s28ru from '../profiles/urovenf/maera_s28ru.pdf';
import s28kz from '../profiles/urovenf/maera_s28kz.pdf';
import p33ru from '../profiles/urovenf/dtrans_p33ru.pdf';
import p33kz from '../profiles/urovenf/dtrans_p33kz.pdf';


function UrovenPage(props) {

    return (

        <div style={{ color: "#233048"  }}>


            <Container fluid={true} >

                <CardDeck style={{ marginTop: "2rem" }}>
                    <SideBar />
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center",position:"relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976981.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO MAERA S25</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 40.1015
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li>Материал мембраны: нерж сталь</li>
                                    <li>Принцип измерения давления: пьезорезистивный</li>
                                    <li>Предел допускаемой основной погрешности: ±0,5%.</li>
                                    <li>Диапазоны измерений: 0...0,25 до 0...1 бар отн.</li>
                                    <li> давления (от 2,5 до 10 м.в.ст.)</li>
                                    <li>Выходной сигнал: 4 - 20 мА, 0 -10 В, 1 - 5 В, 1 - 6 В, 0.5 - 4.5 В</li>
                                    <li>Допустимая температура измеряемой среды: 0...+50°С</li>
                                    <li>Для измерения уровня в емкостях с дождевой водой, мазутом, дизельным топливом,
                                         канализационными водами.</li>
                                         <br>
                                         </br>
                                         <br></br>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                            
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >
                            <Row  >
                                <Col className="p-0 d-flex justify-content-start">
                                    <a href={s25ru} target="_blank" rel="noopener noreferrer" download
                                        style={{ color: "#233048" }}  >
                                        <Button style={{
                                            backgroundColor: "#50e3c2",
                                            color: "#203367",  borderColor: "#50e3c2",
                                            borderRadius: "10px",width:"150px",fontSize:"12px",padding:"0"
                                        }}>
                                            <i className="fas fa-download" />
                                             Скачать на русском
                                       </Button>

                                    </a>

                                </Col>
                                <Col className="p-0 d-flex justify-content-end" >
                                    <a href={s25kz} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976517.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO MAERA S26</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 40.2090
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li>Материал мембраны: нерж сталь</li>
                                    <li>Материал корпуса: нерж сталь</li>
                                    <li>Принцип измерения давления: пьезорезистивный</li>
                                    <li>Предел допускаемой основной погрешности: ±0,7%.</li>
                                    <li>Диапазоны измерений: 0...0,25 до 0...6 бар отн. давления (от 2,5 до 60 м.в.ст.)</li>
                                    <li>Выходной сигнал: 0 - 20 мА, 4 - 20 мА, 0 - 10 В, 1 - 5 В, 1 - 6 В, 0.5 - 4.5 В</li>
                                    <li>Допустимая температура измеряемой среды: 0...+50°С.</li>
                                    <li>Для измерения уровня в емкостях с дождевой водой, мазутом, очистка сточных вод, плавательные бассейны.</li>
                                </ul>
                                <br>
                                </br>
                                <br>
                                </br>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >
                            <Row  >
                                <Col className="p-0 d-flex justify-content-start">
                                    <a href={s26ru} target="_blank" rel="noopener noreferrer" download
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
                                    <a href={s26kz} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28700.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO MAERA F27</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 40.4391
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li>Материал мембраны: керамика</li>
                                    <li>Материал корпуса: нерж. сталь или PTFE</li>
                                    <li>Принцип измерения давления: ёмкостной</li>
                                    <li>Предел допускаемой основной погрешности: ±0,3%.</li>
                                    <li>Диапазоны измерений: 0...0,05 до 0...1,6 бар отн. давления (от 0,5 до 16 м вод. ст.)</li>
                                    <li>Выходной сигнал: 4 - 20 мА, 0.5 - 4.5 В</li>
                                    <li>Допустимая температура измеряемой среды: -20...+60°С или 0…+40°С (корпус из PTFE)°С</li>
                                    <li>Температурная компенсация: опционально встроенный сенсор Pt100</li>
                                    <li>Для измерения уровня в емкостях с дождевой водой, мазутом,
                                         в скважинах, в агрессивных средах (например, в электролитических ваннах, кислотах).</li>
                                </ul>
                                <br></br>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >
                            <Row  >
                                <Col className="p-0 d-flex justify-content-start">
                                    <a href={f27ru} target="_blank" rel="noopener noreferrer" download
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
                                    <a href={f27kz} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28702.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO dTrans p33</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 40.4753
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li>Материал мембраны: нерж сталь</li>
                                    <li>Материал корпуса: нерж сталь</li>
                                    <li>Принцип измерения давления: пьезорезистивный</li>
                                    <li>Предел допускаемой основной погрешности: ±0,5%.</li>
                                    <li>Диапазоны измерений: 0...0,25 до 0...25 бар отн. давления (от 2,5 до 250 м вод. ст.)</li>
                                    <li>Выходной сигнал: 4 - 20 мА</li>
                                    <li>Допустимая температура измеряемой среды: -40...+70°С</li>
                                    <li>Взрывозащита: искробезопасная цепь EEx ia</li>
                                    <li>Варианты исполнения: 404753/000-ххх-658-20-12-1/406 кабель 20 м 404753/000-ххх-659-20-12-1/407
                                         кабель 50 м (необходимая длина кабеля указывается дополнительно текстом)</li>
                                </ul>
                                <br></br>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >
                            <Row  >
                                <Col className="p-0 d-flex justify-content-start">
                                    <a href={p33ru} target="_blank" rel="noopener noreferrer" download
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
                                    <a href={p33kz} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976985.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO MAERA S28</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 40.4392
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li>Материал мембраны: нерж сталь</li>
                                    <li>Материал корпуса: нерж сталь</li>
                                    <li>Принцип измерения давления: тензорезистивный</li>
                                    <li>Предел допускаемой основной погрешности: ±0,5%.</li>
                                    <li>Диапазоны измерений: 0...0,25 до 0...25 бар отн. давления (от 2,5 до 250 м вод. ст.)</li>
                                    <li>Выходной сигнал: 4 - 20 мА</li>
                                    <li>Допустимая температура измеряемой среды: 0...+50°С</li>
                                    <li>Температурная компенсация: опционально встроенный сенсор Pt100 Для измерения уровня в колодцах, скважинах, водоемах,
                                         в дезинфекционных установках с хлором, хлордиоксидом, в агрессивных средах (например, в гальванических ваннах, кислотах).</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >
                            <Row  >
                                <Col className="p-0 d-flex justify-content-start">
                                    <a href={s28ru} target="_blank" rel="noopener noreferrer" download
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
                                    <a href={s28kz} target="_blank" rel="noopener noreferrer" download
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




            </Container>
        </div>
    );
};

export default UrovenPage;