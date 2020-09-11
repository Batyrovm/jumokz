import React from 'react';
import Link from 'react-router-dom/Link';
import Banner from '../components/Banner';
import {Container,Card,CardDeck} from 'react-bootstrap';
import main1 from '../images/main1.jpg'
import main2 from '../images/main2.jpg'
import main3 from '../images/main3.jpg'
//import home1 from '../images/home1.jpg'
import Cards from '../components/Cards';
import ScrollToTop from "react-scroll-to-top";




function HomePage(props) {
    return (
        <div>
            <ScrollToTop smooth />
                <Banner />

                <Container fluid={true}>
                <Link to="/catalogs" style={{color:"white"}}> <h1 style={{ textAlign: "center", color: "#233048", marginTop: "10rem" }} >
                    ҰСЫНЫСТАРЫМЫЗ<br></br>  Наши предложения</h1>
                    </Link>
                
                <CardDeck style={{marginLeft:"1rem",marginRight:"1rem",marginTop:"2rem",marginBottom:"2rem"}}>
                    <Card>
                        <Card.Img variant="top" src={main1} style={{ height: 300, width: '100%' }} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color:"#233048",fontSize:"1rem"}}>
                                Аспап мүмкіндігін жетілдіру<br></br>
                                Быстрое изменение опции прибора

                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1.7rem" }}>
                                Реттегіштер мен өздігінен жазу аспаптарына арналған қосымша платаға тапсырыс жасаңыз </Card.Text>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1.7rem" }}>
                            Закажите опционные платы для регуляторов и самописцев
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
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Қабылданатын шешімдер<br></br>
                                Решения

                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1.7rem" }}>
                                Өнеркәсіп пен ауыл шаруашылығының түрлі салаларына қажетті толық қанды шешімдер
                             </Card.Text>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1.7rem" }}>
                                Комплексные решения для различных отраслей промышленности и сельского хозяйства
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
                            <Card.Title style={{ textAlign: "center", color: "#233048", fontSize: "1rem" }}>
                                Инженерлік қызмет<br></br>
                                Инженерные услуги

                            </Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1.7rem" }}>
                                Жобалау кезінде техникалық қолдаулар көрсету, аспапты бейімдеу мен жөндеу кезінде әр алуан жәрдем беру
                             </Card.Text>
                            <Card.Text style={{ textAlign: "center", color: "#233048", fontSize: "1.7rem" }}>
                                Техническая поддержка проектов, помощь при ремонте и настройке приборов
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
                            height: "330px", width: "500px", borderRadius: "70px", padding: "1rem"
                        }}>
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center", fontSize: "1.7rem", color: "#233048" }}>
                                    Көрме төріндегі JUMO
                            </Card.Title>
                                <Card.Text style={{ textAlign: "center", fontSize: "1rem", color: "#233048" }}>
                                    Көрмеде болған кезде уақыт тауып JUMO мүйісіне мойын бұрып, 
                                    біраз кідірсеңіз мамандарымызбен барлық мәселелерді талқылай аласыз.
                            </Card.Text>
                            
                                <Card.Title style={{ textAlign: "center", fontSize: "1.7rem", color: "#233048" }}>
                                    JUMO на выставках
                            </Card.Title>
                                <Card.Text style={{ textAlign: "center", fontSize: "1rem", color: "#233048" }}>
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