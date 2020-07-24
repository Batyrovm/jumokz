import React from 'react';
import { Container, Card,CardDeck} from 'react-bootstrap';
import bern1 from '../images/bern1.jpg';
import michael1 from '../images/michael1.jpg'



function About2Page(props) {
    return (
        <div>
            <Container fluid={false} >
                <h1 style={{ textAlign: "center", color: "#233048",marginTop:"2rem" }}>Высшее руководство JUMO</h1>
                <div className="ruk">
                 </div>

                 <div style={{marginBottom:"2rem",marginTop:"2rem"}}>
                 <CardDeck>
                        <Card style={{
                            backgroundColor: "rgba(0,0,0,0)",
                            borderColor: "rgba(0,0,0,0)",
                            opacity: "1"}}>
                         <Card.Body>
                            
                             <Card.Title>
                                <h1 style={{ textAlign: "center", color: "#233048" }}>Бернхард Юххайм</h1>
                             </Card.Title>
                             <Card.Text>
                                <h3 style={{ textAlign: "center", color: "#233048" }}>Генеральный директор  и партнер</h3>
                             </Card.Text>
                                <Card.Img variant="top" src={bern1} style={{ height: 400, width: '100%' }} />
                                <Card.Footer small="text" style={{ color:"#717d8a",backgroundColor:"white",textAlign:"center"}}>
                                    Управляющий директор и партнер Dipl.-Ing. 
                                    Бернхард Юххайм - сын основателя компании Морица Юххайма </Card.Footer>
                         </Card.Body>
                     </Card>
                        <Card style={{
                            backgroundColor: "rgba(0,0,0,0)",
                            borderColor: "rgba(0,0,0,0)",
                            opacity: "1",}}>
                        <Card.Body>
                            
                            <Card.Title>
                                <h1 style={{ textAlign: "center", color: "#233048" }}>Майкл Юххайм</h1>
                            </Card.Title>
                            <Card.Text>
                                <h3 style={{ textAlign: "center", color: "#233048" }}>Генеральный директор  и партнер</h3>
                            </Card.Text>
                                <Card.Img variant="top" src={michael1} style={{ height: 400, width: '100%' }} />
                                <Card.Footer small="text" style={{ color: "#717d8a", backgroundColor: "white", textAlign: "center" }}>
                                   Управляющий директор и партнер Дипл.-Кфм. 
                                    Майкл Юххайм - внук основателя компании Морица Юххайма </Card.Footer>
                        </Card.Body>
                    </Card>
                 </CardDeck>
                
                </div>
                
                
           
            </Container>
        </div>
    );
};



export default About2Page;