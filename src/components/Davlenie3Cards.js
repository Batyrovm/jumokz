import React from 'react';
import { Container, Card, Button, CardDeck,Col } from 'react-bootstrap';

import d1ru from '../profiles/davlenief/card3f/d1ru.pdf';
//import d2ru from '../profiles/davlenief/card3f/d2ru.pdf';
//import d2kz from '../profiles/davlenief/card3f/d2kz.pdf';
import d2kz from '../profiles/davlenief/card3f/d54kz.pdf';




function Davlenie3Cards(props) {
    return (
        <div>
            <Container fluid={true} >
                <h1 style={{ textAlign: "center", color: "#233048" }}>Реле давления</h1>
                <CardDeck >
                    <Card style={{
                        backgroundColor: "#dedede", borderRadius: "10px", marginBottom: "2rem", height: "100%",
                        width: "300px", display: "flex", justifyContent: "center", position: "relative"
                    }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294973228.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>Маностат</h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип:40.4201
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <li>Маностат типа 4 ADS служит для определения разрежения, избыточного давления или
                                    перепада давления, например, 
                                    в системах вентиляции и кондиционирования и для контроля фильтров.</li>
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
                            <Card.Img variant="top" src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294986646.png?downsize=*:475px"
                                style={{ height: "180px", width: "180px", margin: "auto", marginTop: "2rem", display: "flex", justifyContent: "center", alignSelf: "center" }} />
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.5rem" }}>
                                <h3>JUMO DELOS HP </h3>
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Тип: 40.5054
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Технические характеристики
                                </Card.Title>
                            <Card.Text style={{ textAlign: "justify", color: "#233048", fontSize: "0.8rem" }}>
                                <ul style={{ listStyle: "none" }}>
                                    <ul>
                                        <li>Өлшем ағаттығы ≤ 0,5 %</li>
                                        <li>Өлшем шегінің масштабын өзгерту мүмкіндігі 1:4</li>
                                        <li>Апаттық жағдайда дабыл беретін екі түрлі түсі бар дисплей</li>
                                        
                                    </ul>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=" justify-content-between p-3" >
                            

                                <Col className="p-0 d-flex justify-content-end" >
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
                           

                        </Card.Footer>
                              </Card>
                </CardDeck>
                 </Container>
        </div>
    );
}
export default Davlenie3Cards;