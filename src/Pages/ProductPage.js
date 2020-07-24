import React from 'react';
import {Container,Button,Row,Col,InputGroup,FormControl, ListGroup,Image,CardDeck, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
//import MediaQuery from 'react-responsive';
import SideBar from '../components/SideBar';

const product = [
    {
        id: 1,
        first:'JUMO TDA-300 и JUMO TDA-3000',
        second: 'Термометры'
    }
]
const product1 = [
    {
        id: 2,
        first:'JUMO IMAGO F3000',
        second: 'Регуляторы'
    }
]
const product2 = [
    {
        id: 3,
        first: 'JUMO MIDAS',
        second:'Давление'
    }
]
const product3 = [
    {
        id: 4,
        first: 'JUMO MAERA S25',
        second: 'Уровень'
    }
]
const product4 = [
    {
        id: 5,
        first: 'JUMO MAERA S26',
        second: 'Уровень'
    }
]
const product5 = [
    {
        id: 6,
        first: 'JUMO MAERA F27',
        second: 'Уровень'
    }
]
const product6 = [
    {
        id: 7,
        first: 'JUMO MAERA S28',
        second: 'Уровень'
    }
]
const product7 = [
    {
        id: 8,
        first: 'JUMO dTrans p33',
        second: 'Уровень'
    }
]

function searchingFor(term) {
    return function (x) {
        return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
        
    }
}


class ProductPage extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            product: product, product1, product2,
            item: '',

        }
        this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler(event) {
        this.setState({ item: event.target.value })
    }
    
    render(){
        const { item, product, product1, product2 } = this.state;
    
    return (
        <div >
                <Container fluid={false}>
                <CardDeck>
                  <SideBar />
                    <Card style={{
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

                         
                        <ListGroup >
                                <ListGroup.Item > <Link to="/termometry">
                                {product.filter(searchingFor(item)).map(product =>
                                    <div key={product.id}>
                             
                                    <Row>
                                       <Col>
                                      <Image style={{width:"100px",height:"100px"}} 
                                                    src=" https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294970847.png?downsize=*:297px"></Image>
                                        </Col>
                                        <Col>
                                                <h4 style={{ color: "#203367" }}>{product.second}</h4>
                                                <h5 style={{ color: "#203367" }}>{product.first}</h5>
                                                
                                        </Col>
                                        <Col>
                                                <Button style={{
                                                    color: "#203367", backgroundColor: "#50e3c2", borderColor: "#50e3c2",
                                    width:"100px",fontSize:"12px"}}>
                                            Подробнее</Button>
                                            
                                        </Col>
                                        
                                    </Row> 
                                    </div>
                                )
                               }
                                </Link> </ListGroup.Item>
                            <ListGroup.Item > <Link to="/regulyatory">
                                {product1.filter(searchingFor(item)).map(product1 =>
                                    <div key={product1.id}>
                                        <Row>
                                            <Col>
                                                <Image style={{ width: "100px", height: "100px" }}
                                                    src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28730.png?downsize=*:297px"></Image>
                                            </Col>
                                            <Col>
                                                <h4 style={{ color: "#203367" }}>{product1.second}</h4>
                                                <h5 style={{ color: "#203367" }}>{product1.first}</h5>
                                            </Col>
                                            <Col>
                                                <Button style={{
                                                    color: "#203367", backgroundColor: "#50e3c2", borderColor: "#50e3c2",
                                                    width: "100px", fontSize: "12px"
                                                }}>
                                                    Подробнее</Button>

                                            </Col>
                                        </Row>
                                    </div>
                                )
                                }
                            </Link> </ListGroup.Item>
                            <ListGroup.Item > <Link to="/davlenie">
                                {product2.filter(searchingFor(item)).map(product2 =>
                                    <div key={product2.id}>
                                        <Row>
                                            <Col>
                                                <Image style={{ width: "100px", height: "100px" }}
                                                    src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294969730.png?downsize=*:297px"></Image>
                                            </Col>
                                            <Col>
                                                <h4 style={{ color: "#203367" }}>{product2.second}</h4>
                                                <h5 style={{ color: "#203367" }}>{product2.first}</h5>
                                            </Col>
                                            <Col>
                                                <Button style={{
                                                    color: "#203367", backgroundColor: "#50e3c2", borderColor: "#50e3c2",
                                                    width: "100px", fontSize: "12px"
                                                }}>
                                                    Подробнее</Button>

                                            </Col>
                                        </Row>
                                    </div>
                                )
                                }
                            </Link> </ListGroup.Item>
                            <ListGroup.Item > <Link to="/uroven">
                                {product3.filter(searchingFor(item)).map(product3 =>
                                    <div key={product3.id}>
                                        <Row>
                                            <Col>
                                                <Image style={{ width: "100px", height: "100px" }}
                                                    src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976981.png?downsize=*:475px"></Image>
                                            </Col>
                                            <Col>
                                                <h4 style={{ color: "#203367" }}>{product3.second}</h4>
                                                <h5 style={{ color: "#203367" }}>{product3.first}</h5>
                                            </Col>
                                            <Col>
                                                <Button style={{
                                                    color: "#203367", backgroundColor: "#50e3c2", borderColor: "#50e3c2",
                                                    width: "100px", fontSize: "12px"
                                                }}>
                                                    Подробнее</Button>

                                            </Col>
                                        </Row>
                                    </div>
                                )
                                }
                            </Link> </ListGroup.Item>
                            <ListGroup.Item > <Link to="/uroven">
                                {product4.filter(searchingFor(item)).map(product4 =>
                                    <div key={product4.id}>
                                        <Row>
                                            <Col>
                                                <Image style={{ width: "100px", height: "100px" }}
                                                    src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976517.png?downsize=*:475px"></Image>
                                            </Col>
                                            <Col>
                                                <h4 style={{ color: "#203367" }}>{product4.second}</h4>
                                                <h5 style={{ color: "#203367" }}>{product4.first}</h5>
                                            </Col>
                                            <Col>
                                                <Button style={{
                                                    color: "#203367", backgroundColor: "#50e3c2", borderColor: "#50e3c2",
                                                    width: "100px", fontSize: "12px"
                                                }}>
                                                    Подробнее</Button>

                                            </Col>
                                        </Row>
                                    </div>
                                )
                                }
                            </Link> </ListGroup.Item>
                            <ListGroup.Item > <Link to="/uroven">
                                {product5.filter(searchingFor(item)).map(product5 =>
                                    <div key={product5.id}>
                                        <Row>
                                            <Col>
                                                <Image style={{ width: "100px", height: "100px" }}
                                                    src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28700.png?downsize=*:475px"></Image>
                                            </Col>
                                            <Col>
                                                <h4 style={{ color: "#203367" }}>{product5.second}</h4>
                                                <h5 style={{ color: "#203367" }}>{product5.first}</h5>
                                            </Col>
                                            <Col>
                                                <Button style={{
                                                    color: "#203367", backgroundColor: "#50e3c2", borderColor: "#50e3c2",
                                                    width: "100px", fontSize: "12px"
                                                }}>
                                                    Подробнее</Button>

                                            </Col>
                                        </Row>
                                    </div>
                                )
                                }
                            </Link> </ListGroup.Item>
                            <ListGroup.Item > <Link to="/uroven">
                                {product6.filter(searchingFor(item)).map(product6 =>
                                    <div key={product6.id}>
                                        <Row>
                                            <Col>
                                                <Image style={{ width: "100px", height: "100px" }}
                                                    src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976985.png?downsize=*:475px"></Image>
                                            </Col>
                                            <Col>
                                                <h4 style={{ color: "#203367" }}>{product6.second}</h4>
                                                <h5 style={{ color: "#203367" }}>{product6.first}</h5>
                                            </Col>
                                            <Col>
                                                <Button style={{
                                                    color: "#203367", backgroundColor: "#50e3c2", borderColor: "#50e3c2",
                                                    width: "100px", fontSize: "12px"
                                                }}>
                                                    Подробнее</Button>

                                            </Col>
                                        </Row>
                                    </div>
                                )
                                }
                            </Link> </ListGroup.Item>
                            <ListGroup.Item > <Link to="/uroven">
                                {product7.filter(searchingFor(item)).map(product7 =>
                                    <div key={product7.id}>
                                        <Row>
                                            <Col>
                                                <Image style={{ width: "100px", height: "100px" }}
                                                    src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28702.png?downsize=*:475px"></Image>
                                            </Col>
                                            <Col>
                                                <h4 style={{ color: "#203367" }}>{product7.second}</h4>
                                                <h5 style={{ color: "#203367" }}>{product7.first}</h5>
                                            </Col>
                                            <Col>
                                                <Button style={{
                                                    color: "#203367", backgroundColor: "#50e3c2", borderColor: "#50e3c2",
                                                    width: "100px", fontSize: "12px"
                                                }}>
                                                    Подробнее</Button>

                                            </Col>
                                        </Row>
                                    </div>
                                )
                                }
                            </Link> </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </CardDeck>
                
            </Container>
           
        </div>
    );
    }
};

export default ProductPage;