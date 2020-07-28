import React from 'react';
import Link from 'react-router-dom/Link';
import Banner from '../components/Banner';
import {Container,Card,CardDeck} from 'react-bootstrap';
import main1 from '../images/main1.jpg'
import main2 from '../images/main2.jpg'
import main3 from '../images/main3.jpg'
//import home1 from '../images/home1.jpg'
import Cards from '../components/Cards';




function HomePage(props) {
    return (
        <div>
            
                <Banner />

                <Container fluid={true}>
                <Link to="/catalogs" style={{color:"white"}}> <h1 style={{ textAlign: "center", color: "#233048", marginTop: "10rem" }} >
                    Наши предложения</h1>
                    </Link>
                
                <CardDeck style={{marginLeft:"1rem",marginRight:"1rem",marginTop:"2rem",marginBottom:"2rem"}}>
                    <Card>
                        <Card.Img variant="top" src={main1} style={{ height: 300, width: '100%' }} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color:"#233048",fontSize:"1rem"}}>Быстрое изменение порядка</Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "2rem" }}>
                                Закажите запчасти и аксессуары снова
      </Card.Text>

                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.2rem",paddingTop:"4em" }}>
                                {/*<Link style={{ color: "#233048" }} href="#">Познокомтесь с инженерией
                            <hr style={{ border: "1px solid #50e3c2 " }} />
    </Link>*/}
                            </Card.Title>
                        </Card.Body>
                       
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={main2} style={{ height: 300, width: '100%' }} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>Решения</Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "2rem" }}>
                                Комплексные решения для растений и машин
                            </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.2rem", paddingTop: "4em" }}>
                                {/*<Link style={{ color: "#233048" }} href="#">Познокомтесь с инженерией
                            <hr style={{ border: "1px solid #50e3c2 " }} />
    </Link>*/}
                            </Card.Title>
                        </Card.Body>
                        
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={main3} style={{ height: 300, width: '100%' }} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>Инженерные услуги</Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "2rem" }}>
                                Разработка индивидуального проекта и инновации
      </Card.Text>
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1.2rem", paddingTop: "1.5em" }}>
                                {/*<Link style={{ color: "#233048" }} href="#">Познокомтесь с инженерией
                            <hr style={{ border: "1px solid #50e3c2 " }} />
    </Link>*/}
                            </Card.Title>
                        </Card.Body>
                        
                    </Card>
                </CardDeck>

                </Container>

            <div classname="bg-main" style={{marginTop:"5em"}} >
                 
                    {/*box */}
                <div className="container1" >
                    <div classname="justify-content-end" style={{paddingTop:"5rem",justifyContent:"center",display:"flex"}}>
                        <Card style={{
                            backgroundColor: "rgba(255,255,255,.9)",
                            height: "270px", width: "500px", borderRadius: "70px", padding: "1rem"
                        }}>
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center", fontSize: "2.5rem", color: "#233048" }}>
                                    Jumo на выставках
                            </Card.Title>
                                <Card.Text style={{ textAlign: "center", fontSize: "1.2rem", color: "#233048" }}>
                                    Посетите нас на нашем стенде и лично обсудите ваши проблемы
                                    с нашими специалистами по продажам и проектированию.
                            </Card.Text>
                                {/*<p style={{ textAlign: "center", justifyContent: "center", alignSelf: "center" }}>
                                    <Button style={{
                                        backgroundColor: "#50e3c2",
                                        color: "#203367", alignItems: "center", borderColor: "#50e3c2",marginTop:"1rem",
                                        borderRadius:"10px"
                                    }}>
                                        Наше участие в выставке в 2020 году
                              </Button>
                                </p>*/}

                            </Card.Body>
                        </Card>
                    </div>
                  
                    
                </div>
               </div>

            <Cards/>
            
            
            

            
        </div>
        
    );
};

export default HomePage;