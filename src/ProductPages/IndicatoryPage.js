import React from 'react';
import { Container, Card, Button, Row, Col, CardDeck } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import ind1 from '../profiles/indicatoryf/di_eco.pdf';
import ind2 from '../profiles/indicatoryf/di32.pdf';
import ind3 from '../profiles/indicatoryf/di308.pdf';
import ind4 from '../profiles/indicatoryf/tda3000.pdf';





function IndicatoryPage(props) {

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
                                <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987382.png?downsize=*:475px"
                                    style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                    <h3>JUMO di eco</h3>
                                </Card.Title>
                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Тип:70.1540
                               </Card.Text>
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Технические характеристики
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                    <ul style={{ listStyle: "none" }}>
                                        <ul>
                                            <li>Контроль предельных значений с помощью переключающего реле 10 А</li>
                                            <li>Регулируемый гистерезис</li>
                                            <li>Конфигурируемое подавление аварийного сигнала</li>
                                            <li>Символы на дисплее для единиц измерения температуры, минут и секунд</li>
                                            <li>Уровень параметров защищен кодовым числом</li>
                                        </ul>
                                    </ul>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" justify-content-between p-3" >

                                <a href={ind1} target="_blank" rel="noopener noreferrer" download
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
                                <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28732.png?downsize=*:475px"
                                    style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                    <h3>JUMO di 32/di 08</h3>
                                </Card.Title>
                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Тип: 70.1530
                               </Card.Text>
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Технические характеристики
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                    <ul style={{ listStyle: "none" }}>
                                        <ul>
                                            <li>структурируемая схема обслуживания и программирования</li>
                                            <li>коррекция линеаризации по данным заказчика</li>
                                            <li>2 предельных компаратора цифровой входной фильтр с программируемой постоянной времени фильтра</li>
                                            <li>программируемые временные задержки включения каждого реле</li>
                                            <li>программируемые временные задержки включения после подачи электропитания</li>
                                        </ul>
                                    </ul>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" justify-content-between p-3" >
                              
                                        <a href={ind2} target="_blank" rel="noopener noreferrer" download
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
                    <CardDeck >
                        <Card style={{
                            backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                            width: "300px", display: "flex", justifyContent: "center", position: "relative"
                        }}>
                            <Card.Body>
                                <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294978189.png?downsize=*:475px"
                                    style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                    <h3>JUMO di 308</h3>
                                </Card.Title>
                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Тип:70.1550
                               </Card.Text>
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Технические характеристики
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                    <ul style={{ listStyle: "none" }}>
                                        <ul>
                                            <li>DKD сертификат на калибровки</li>
                                            <li>Запись данных для 9999 измеряемых величин</li>
                                            <li>Простое считывание данных через USB и оценка</li>
                                            
                                        </ul>
                                        <ul>При помощи РС (только для TDA-3000)
                                            <li>контроль предельных значений</li>
                                            <li>минимальное и максимальное измерение значения</li>
                                            <li>батарея АА, Mignon LR6 с высоким сроком службы</li>
                                        </ul>
                                    </ul>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" justify-content-between p-3" >

                                <a href={ind3} target="_blank" rel="noopener noreferrer" download
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
                                <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294970847.png?downsize=*:475px"
                                    style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                    <h3>JUMO TDA-300 und JUMO TDA-3000</h3>
                                </Card.Title>
                                <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Тип:  70.2540
                               </Card.Text>
                                <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                    Технические характеристики
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                    <ul style={{ listStyle: "none" }}>
                                        <ul>
                                            <li>DKD сертификат на калибровки</li>
                                            <li>Запись данных для 9999 измеряемых величин</li>
                                            <li>Простое считывание данных через USB и оценка</li>

                                        </ul>
                                        <ul>При помощи РС (только для TDA-3000)
                                            <li>контроль предельных значений</li>
                                            <li>минимальное и максимальное измерение значения</li>
                                            <li>батарея АА, Mignon LR6 с высоким сроком службы</li>
                                        </ul>
                                    </ul>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" justify-content-between p-3" >

                                <a href={ind4} target="_blank" rel="noopener noreferrer" download
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
    );
};

export default IndicatoryPage;