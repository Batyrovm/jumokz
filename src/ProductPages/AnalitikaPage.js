import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import Card1 from '../components/Analitika1Cards';
import Card2 from '../components/Analitika2Cards';
import Card3 from '../components/Analitika3Cards';
import Card4 from '../components/Analitika4Cards';
import Card5 from '../components/Analitika5Cards';
import Card6 from '../components/Analitika6Cards';



function AnalitikaPage(props) {

    return (

        <div style={{ color: "#233048" }}>

            <Container fluid={true} >
                <Row >
                    <Col xl={3} style={{ marginTop: "1.5rem" }}>
                        <SideBar />
                    </Col>
                    <Col xl={9} style={{ marginTop: "2rem" }} >
                         <Card1/>
                         <Card2/>
                         <Card3/>
                         <Card4/>
                         <Card5/>
                         <Card6/>
                    </Col>
                </Row>



            </Container>
        </div>
    );
};

export default AnalitikaPage;