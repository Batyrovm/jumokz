import React from 'react';
import { Container,  Row, Col } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import RegulyatoryCards from '../components/RegulyatoryCards'




function RegulyatoryPage(props) {

    return (

        <Container fluid={true}>
            
            <Row > 
              <Col xl={3} style={{marginTop:"1.5rem"}}>
                <SideBar/>
              </Col>
                <Col xl={9} style={{ marginTop: "2rem" }} >
                   
                    <RegulyatoryCards />
                    
                   
                </Col>
            </Row>

            
        </Container>
    );
};

export default RegulyatoryPage;