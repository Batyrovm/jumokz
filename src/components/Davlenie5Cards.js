import React from 'react';
import { Container, Card, Button, CardDeck } from 'react-bootstrap';

import d1ru from '../profiles/davlenief/card5f/d1ru.pdf';
import d2ru from '../profiles/davlenief/card5f/d2ru.pdf';
import d3ru from '../profiles/davlenief/card5f/d3ru.pdf';
import d4ru from '../profiles/davlenief/card5f/d4ru.pdf';
import d5ru from '../profiles/davlenief/card5f/d5ru.pdf';
import d6ru from '../profiles/davlenief/card5f/d6ru.pdf';
import d7ru from '../profiles/davlenief/card5f/d7ru.pdf';
import d8ru from '../profiles/davlenief/card5f/d8ru.pdf';
import d9ru from '../profiles/davlenief/card5f/d9ru.pdf';




function Davlenie5Cards(props) {
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294977681.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO PEKA</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:40.9711
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li>Адаптер присоединения к процессу</li>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >


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


                        </Card.Footer>

                    </Card>

                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28704.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Мембранный разделитель</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:40.9772
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    
                                        <li>Мембранный разъединитель с коническим присоединением</li>

                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28705.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Мембранный разделитель</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:40.9774
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li>разделитель с зажимным присоединением CLAMP</li>
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28707.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Мембранный разделитель</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 40.9776
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    
                                        <li> разделитель с фланцем DRD или присоединением VARIVENT</li>
                                       
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28711.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Мембранный разделитель</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 40.9778
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li>Мембранный разделитель с присоединением ISS или SMS, или RJT и накидной гайкой</li>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >


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


                        </Card.Footer>

                    </Card>

                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28708.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Мембранный разделитель</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 40.9784
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    
                                        <li>Мембранный разделитель с фланцевым присоединением согласно 
                                            DIN EN 1092-1 с уплотнительной коробкой формы В1</li>
                                       
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
                {/*row4 */}
                <CardDeck >
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28709.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Мембранный разделитель</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:40.9786
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li> с фланцевым присоединением по 
                                        ANSI В 16.5 с кромкой </li>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >


                            <a href={d7ru} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28707.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Принадлежности для средств</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 40.9700
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    
                                    <li>Принадлежности для средств измерения давления</li>

                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >
                            <a href={d8ru} target="_blank" rel="noopener noreferrer" download
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
                {/*row5*/}
                <CardDeck >
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995824.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Вентильные блоки</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:40.9706
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li> Используются в сочетании с приборами для измерения давления</li>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >


                            <a href={d9ru} target="_blank" rel="noopener noreferrer" download
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
                    </Card>
                </CardDeck>
            </Container>
        </div>
    );
}
export default Davlenie5Cards;