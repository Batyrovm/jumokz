import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import Card1 from '../components/Davlenie1Cards';
import Card2 from '../components/Davlenie2Cards';
import Card3 from '../components/Davlenie3Cards';
import Card4 from '../components/Davlenie4Cards';
import Card5 from '../components/Davlenie5Cards';



function DavleniePage(props) {

    return (

        <div style={{ color: "#233048" }}>

            <Container fluid={true} >
                <Row >
                    <Col xl={3} style={{ marginTop: "1.5rem" }}>
                        <SideBar />
                    </Col>
                    <Col xl={9} style={{ marginTop: "2rem" }} >
                        <Card1/>
                        <Card2 />
                        <Card3/>
                        <Card4/>
                        <Card5/>
                    </Col>
                </Row>



            </Container>
        </div>
        
    );
};

export default DavleniePage;