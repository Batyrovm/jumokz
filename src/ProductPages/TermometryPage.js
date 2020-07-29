import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import Str from '../components/StrelochnyeTermometryCards';
import Str2 from '../components/SoprotivlenieTermostaty';
import Str3 from '../components/TermoparyCards';
import Str4 from '../components/PrinadlezhnostiCards';



function TermometryPage(props) {

    return (

        <div style={{ color: "#233048" }}>

            <Container fluid={true} >
                <Row >
                    <Col xl={3} style={{ marginTop: "1.5rem" }}>
                        <SideBar />
                    </Col>
                    <Col xl={9} style={{ marginTop: "2rem" }} >
                           <Str/>
                           <Str2/>
                           <Str3/>
                           <Str4/>
                        </Col>
                        </Row>
                


            </Container>
        </div>
    );
};

export default TermometryPage;