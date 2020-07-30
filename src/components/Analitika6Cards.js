import React from 'react';
import { Container, Card, Button, CardDeck } from 'react-bootstrap';

import a1 from '../profiles/analitkaf/card6f/anc1ru.pdf';
import a2 from '../profiles/analitkaf/card6f/anc2ru.pdf';
import a3 from '../profiles/analitkaf/card6f/anc3ru.pdf';
import a4 from '../profiles/analitkaf/card6f/anc4ru.pdf';


function Analitika6Cards(props) {
    return (
        <div>
            <Container fluid={true} >
                <h1 style={{ textAlign: "center", color: "#233048" }}>Принадлежности</h1>
                <CardDeck >
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294969851.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Принадлежности для сенсоров</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 20.2990
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Соединительные провода</li>
                                        <li>Имитаторы величины pH и электропроводности</li>
                                       
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={a1} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294992641.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Преобразователь импеданса </h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  20.2995
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Не зависит от наличия сети</li>
                                        <li>Возможность последующего монтажа </li>
                                </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={a2} target="_blank" rel="noopener noreferrer" download
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
                {/*row2 */}
                <CardDeck >
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28689.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Имитаторы и калибровочные адаптеры </h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:20.2711
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={a3} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294969591.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Компенсационный термометр JUMO</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:  20.1085
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={a4} target="_blank" rel="noopener noreferrer" download
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
export default Analitika6Cards;