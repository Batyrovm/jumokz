import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../components/SideBar';




function DavleniePage(props) {

    return (

        <div style={{ color: "#233048" }}>

            <Container fluid={true} >
                <Row >
                    <Col xl={3} style={{ marginTop: "1.5rem" }}>
                        <SideBar />
                    </Col>
                    <Col xl={9} style={{ marginTop: "2rem" }} >


                    </Col>
                </Row>



            </Container>
        </div>
    );
};

export default DavleniePage;