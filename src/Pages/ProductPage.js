import React from 'react';
import {Container,Button,Row,Col,InputGroup,FormControl, ListGroup,Image,CardDeck, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
//import MediaQuery from 'react-responsive';
import SideBar from '../components/SideBar';

const product = [
    {
        id: 1,
        first:'JUMO TDA-300 и JUMO TDA-3000',
        second: 'Термометры',
        link:'/termometry',
        type: 'Тип: 40.1015',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294970847.png?downsize=*:297px'
    },
    {
        id: 2,
        first: 'JUMO IMAGO F3000',
        second: 'Регуляторы',
        link:'/regulyatory',
        type: 'Тип: 40.1015',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28730.png?downsize=*:297px'
    },
     {
        id: 3,
        first: 'JUMO MIDAS',
        second: 'Давление',
        link:'/davlenie',
         type: 'Тип: 40.1015',
         imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294969730.png?downsize=*:297px'
    },
    {
        id: 4,
        first: 'JUMO MAERA S25',
        second: 'Уровень',
        link:'/uroven',
        type:'Тип: 40.1015',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976981.png?downsize=*:475px'
    },
    {
        id: 5,
        first: 'JUMO MAERA S26',
        second: 'Уровень',
        link:'/uroven',
        type: 'Тип: 40.2090',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976517.png?downsize=*:475px'
    },
    {
        id: 6,
        first: 'JUMO MAERA F27',
        second: 'Уровень',
        link:'/uroven',
        type: 'Тип: 40.4391',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28700.png?downsize=*:475px'
    },
    {
        id: 7,
        first: 'JUMO MAERA S28',
        second: 'Уровень',
        link:'/uroven',
        type: 'Тип: 40.4392',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976985.png?downsize=*:475px'
    },
    {
        id: 8,
        first: 'JUMO dTrans p33',
        second: 'Уровень',
        link:'/uroven',
        type: 'Тип: 40.4753',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28702.png?downsize=*:475px'
    },
    {
        id: 9,
        first: 'JUMO dTRANS p02 DELTA',
        second: 'Расход',
        link: '/rashod',
        type: 'Тип: 40.4382',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987380.png?downsize=*:475px'
    },
    {
        id: 10,
        first: 'JUMO SVS 3000',
        second: 'Программное обеспечение',
        link: '/po',
        type: 'Тип: 70.0755',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28731.png?downsize=*:475px'
      },
    {
        id: 11,
        first: 'Измерительные преобразователи относительной влажности',
        second: 'Влажность',
        link: '/vlazhnost',
        type: 'Тип: 90.7020',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294996284.png?downsize=*:475px'
        },
    {
        id: 12,
        first: 'Искробезопасные измерительные преобразователи относительной влажности',
        second: 'Влажность',
        link: '/vlazhnost',
        type: 'Тип: 90.7025',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294979684.png?downsize=*:475px'
        },
     {
        id: 13,
         first: 'Измерительные преобразователи относительной влажности(промышленная серия)',
         second: 'Влажность',
         link: '/vlazhnost',
         type: 'Тип: 90.7023',
         imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981083.png?downsize=*:475px'
        },
    {
        id: 14,
        first: 'Измерительные преобразователи относительной влажности (с гигрометрическими полимерными волокнами) и температуры',
        second: 'Влажность',
        link: '/vlazhnost',
        type: 'Тип: 90.7031',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294996338.png?downsize=*:475px'
         },
    {
        id: 15,
        first: 'Гигростаты',
        second: 'Влажность',
        link: '/vlazhnost',
        type: 'Тип: 90.7032',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28867.png?downsize=*:475px'
        },
    {
        id: 16,
        first: 'Измерительные преобразователи относительной влажности (с емкостным сенсором)',
        second: 'Влажность',
        link: '/vlazhnost',
        type: 'Тип: 90.7027',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987301.png?downsize=*:475px'
        },
    {
        id: 17,
        first: 'Измерительные преобразователи относительной влажности  температуры и концентрации CO2',
        second: 'Влажность',
        link: '/vlazhnost',
        type: 'Тип: 90.7021',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294988425.png?downsize=*:475px'
       },
    
   
]


function searchingFor(term) {
    return function (x) {
        return x.first.toLowerCase().includes(term.toLowerCase()) || x.second.toLowerCase().includes(term.toLowerCase()) ||
            x.type.toLowerCase().includes(term.toLowerCase()) || !term;
        
    }
}


class ProductPage extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            product: product, 
            item: '',

        }
        this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler(event) {
        this.setState({ item: event.target.value })
    }
    
    render(){
        const { item, product } = this.state;
    
    return (
        <div >
                <Container fluid={false}>
                <CardDeck style={{width:"100%"}}>
                    
                        <div style={{top:"0"}}>
                  <SideBar/>
                    </div>
                
                    <Card ml="auto" style={{
                        backgroundColor: "rgba(0,0,0,0)",
                        borderColor: "rgba(0,0,0,0)",marginBottom:"2rem"}}>
                  
                        <h1 style={{ textAlign: "center", color: "#233048",marginTop:"2rem" }}>Все товары</h1>
                            
                        <InputGroup className="mt-3" style={{ marginTop: "2rem", marginBottom: "2rem" }} 
                        type="text" id="input" onChange={this.searchHandler} value={item}>
                            <FormControl style={{ borderColor: "#50e3c2" }}
                                placeholder="Найти товар" 
                                
                            />
                           
                            <InputGroup.Append>
                                <Button style={{ color: "#203367", backgroundColor: "#50e3c2", borderColor:"#50e3c2"}}
                                    onChange={this.searchHandler}>Поиск</Button>
                            </InputGroup.Append>
                        </InputGroup>

                         
                        <ListGroup style={{ border: "1px solid #203367"}} >
                            <ListGroup.Item > 
                                {product.filter(searchingFor(item)).map(product =>
                                    <div key={product.id}>
                             
                                    <Row>
                                       <Col>
                                      <Image style={{width:"100px",height:"100px"}} 
                                                 alt="Image"   src={product.imgSrc}/>
                                        </Col>
                                        <Col>
                                                <h4 style={{ color: "#203367" }}>{product.second}</h4>
                                                <h5 style={{ color: "#203367" }}>{product.first}</h5>
                                                <h5 style={{color:"#203367"}}>{product.type}</h5>
                                                
                                                <br></br>
                                                <br></br>
                                                
                                        </Col>
                                        
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col>
                                        </Col>
                                            
                                            <Col></Col>
                                            <Col >
                                                <Link to={product.link} >   <Button style={{
                                                    color: "#203367", backgroundColor: "#50e3c2", borderColor: "#50e3c2",
                                                    width: "100px", fontSize: "12px"
                                                }}>
                                                    Подробнее</Button></Link>
                                            </Col>
                                    </Row>
                                        <hr style={{ border: "0.5px solid #203367" }} /> 
                                    </div>
                                )
                               }
                                 </ListGroup.Item>
                         
                        </ListGroup>
                    </Card>
                </CardDeck>
                
            </Container>
           
        </div>
    );
    }
};

export default ProductPage;