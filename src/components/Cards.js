import React from 'react';
import { Container, CardDeck,Image, Button} from 'react-bootstrap';
import  Card from 'react-bootstrap/Card';
import logo from '../images/logo.png';




function Cards(props) {
    return(
        <div>
            <Container fluid={false} >
                <h1 style={{ textAlign: "center", color: "#233048", marginTop: "2rem" }}>
                    Қолдау көрсетейік пе? <br></br>
                    Вы ищете поддержку?</h1>
                

               
                <CardDeck style={{ marginLeft: "2.7rem", marginRight: "2.7rem", marginTop: "2rem",
                 marginBottom: "2rem"}}>
                    <Card style={{ backgroundColor: "#203367" ,borderRadius:"10px"}}>
                        <Image variant="top" src={logo} 
          style={{ height:"75px",width:"130px",marginTop:"10px",justifyContent:"center" ,alignSelf:"center"}}/>

                        
                           <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "1.6rem" }}>
                                JUMO өнімдеріне деген сұраныс<br></br>
                                Запрос на поставку продукции JUMO

                               </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "white", fontSize: "1rem" }}>
                                Тапсырысшының барлық қажетін коммерциялық ұсыныс кезінде егжей-текжейлі ескеру.
                                <br></br>
                                <br></br>
                            </Card.Text>
                            <Card.Text style={{ textAlign: "center", color: "white", fontSize: "1rem" }}>
                                Индивидуальный подход при составлении коммерческого предложение, учет всех пожелании клиента.
                                <br></br>
                                <br></br>
                                
                            </Card.Text>
                            
                            <hr style={{border:"1px solid white"}} />
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "2rem" }}>
                                +7 (727) 250 56 99
                            </Card.Title>
                            <p style={{ textAlign: "center", justifyContent: "center", alignSelf: "center" }}>
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", alignItems: "center", borderColor: "#50e3c2", marginTop: "1rem",
                                    borderRadius: "10px"
                                }} href="http://www.mail.ru/" target="_blank">
                                
                                too-imago@mail.ru
                                
                                </Button> 
                                
                            </p>
                           </Card.Body>
                       
                   </Card>
                    <Card style={{ backgroundColor: "#5e6977", borderRadius:"10px"}}>
                        <Image variant="top" src={logo} 
                            style={{ height: "75px", width: "130px", marginTop: "10px", justifyContent: "center", alignSelf: "center" }} />


                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "1.6rem" }}>
                                Техникалық қолдауды қажет еткен кезде<br></br>
                                Запрос на техподдержку

                               </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "white", fontSize: "1rem" }}>
                                JUMO аспаптарының кепілдікті мерзімімен шектелмей, аспаптарды қолдану кезінде шектеусіз 
                                техникалық қолдау көрсету.
                                </Card.Text>
                                <Card.Text style={{ textAlign: "center", color: "white", fontSize: "1rem" }}>
                                Техническая поддержка клиента в процессе эксплуатации оборудования JUMO,
                                 не ограничиваясь гарантийным сроком.
                                  </Card.Text>
                            
                            <hr style={{ border: "1px solid white" }} />
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "2rem" }}>
                                +7 (727) 250 56 77
                            </Card.Title>
                            <p style={{ textAlign: "center", justifyContent: "center", alignSelf: "center" }}>
                                <Button style={{
                                    backgroundColor: "#50e3c2",
                                    color: "#203367", alignItems: "center", borderColor: "#50e3c2", marginTop: "1rem",
                                    borderRadius: "10px"
                                }} href="http://www.mail.ru/" target="_blank">info@jumo.kz</Button>
                               </p>
                        </Card.Body>

                    </Card>
               </CardDeck>
                
            </Container>
        </div>
    );
}
export default Cards;