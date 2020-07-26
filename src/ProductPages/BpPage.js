import React from 'react';
import { Container, Card, Button, CardDeck } from 'react-bootstrap';
import SideBar from '../components/SideBar'

import bp1 from '../profiles/bpf/bi_exi.pdf';
import bp2 from '../profiles/bpf/sbp.pdf';





function BpPage(props) {

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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995355.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Барьер искробезопасности</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 70.7530
                               </Card.Text>

                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>

                                <ul style={{ listStyle: "none" }}>
                                    <Card.Text>Для питания преобразователей давления и температуры с
                                         искробезопасной цепью Ex ia, с поддержкой HART сигнала</Card.Text>
                                </ul>
                                

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={bp1} target="_blank" rel="noopener noreferrer" download
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294969740.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Сетевой блок питания для измерительных преобразователей</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 70.7500
                               </Card.Text>

                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "1rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <Card.Text>Для монтажа на шину</Card.Text>
                                </ul>
                                

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >

                            <a href={bp2} target="_blank" rel="noopener noreferrer" download
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

export default BpPage;