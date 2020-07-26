import React from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import SideBar from '../components/SideBar'





function AnalitikaPage(props) {

    return (

        <div style={{ color: "#233048" }}>

            <Container fluid={true} >

                <CardDeck style={{ marginTop: "2rem" }}>

                    <SideBar />

                </CardDeck>




            </Container>
        </div>
    );
};

export default AnalitikaPage;