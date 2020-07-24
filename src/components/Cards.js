import React from 'react';
import { Container, CardDeck,Image, Button} from 'react-bootstrap';
import  Card from 'react-bootstrap/Card';
import logo from '../images/logo.png';



function Cards(props) {
    return(
        <div>
            <Container fluid={false} >
                <h1 style={{ textAlign: "center", color: "#233048", marginTop: "2rem" }}>Вы ищете поддержку?</h1>
                

               
                <CardDeck style={{ marginLeft: "2.7rem", marginRight: "2.7rem", marginTop: "2rem",
                 marginBottom: "2rem"}}>
                    <Card style={{ backgroundColor: "#203367" ,borderRadius:"10px"}}>
                        <Image variant="top" src={logo} 
          style={{ height:"75px",width:"130px",marginTop:"10px",justifyContent:"center" ,alignSelf:"center"}}/>

                        
                           <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "1.66rem" }}>
                                    Индивидуальное предложение
                               </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "white", fontSize: "1rem" }}>
                                    Мы на вашей стороне с вашим проектом и создаем предложение 
                                    с учетом ваших личных потребностей, которое отвечает вашим потребностям.
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "1.3rem" }}>
                                КОМАНДА ПРОДАЖ
                               </Card.Title>
                            <hr style={{border:"1px solid white"}} />
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "2rem" }}>
                                +7(777)777-77-77
                            </Card.Title>
                            <p style={{ textAlign: "center", justifyContent: "center", alignSelf: "center" }}>
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", alignItems: "center", borderColor: "#50e3c2", marginTop: "1rem",
                                    borderRadius: "10px"}}>Запросить цену сейчас!</Button>
                            </p>
                           </Card.Body>
                       
                   </Card>
                    <Card style={{ backgroundColor: "#5e6977", borderRadius:"10px"}}>
                        <Image variant="top" src={logo} 
                            style={{ height: "75px", width: "130px", marginTop: "10px", justifyContent: "center", alignSelf: "center" }} />


                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "1.66rem" }}>
                                Запрос на обслуживание
                               </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "white", fontSize: "1rem" }}>
                                Мы позаботимся о ваших проблемах и найдем решение для вас.
                                 Мы также ваш контакт для ввода в эксплуатацию, технического обслуживания и калибровки.
                               </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "1.3rem" }}>
                                КОМАНДНЫЙ СЕРВИС
                               </Card.Title>
                            <hr style={{ border: "1px solid white" }} />
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "2rem" }}>
                                +7(777)777-77-77
                            </Card.Title>
                            <p style={{ textAlign: "center", justifyContent: "center", alignSelf: "center" }}>
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", alignItems: "center", borderColor: "#50e3c2", marginTop: "1rem",
                                    borderRadius: "10px"}}>Связаться сейчас!</Button>
                               </p>
                        </Card.Body>

                    </Card>
               </CardDeck>
                
            </Container>
        </div>
    );
}
export default Cards;