import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';



class ContactsPage extends React.Component{

    constructor(props) {
        super(props);
        this.props = {
            name: "",
            email: "",
            message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
     handleInputChange(e){
         e.preventDefault()
         const target = e.target;
         const name = target.name;
         const value = target.value;
          
         this.setState({[name]: value})
     }


    handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "gmail",
            "test",
            e.target,
            "user_ZmoMD0bX2Mur2iy9v8hOD"
        )
            .then()
            
        this.setState({
            name: "",
            email: "",
            message: "",
        });
    };

    render() {
        
        return (
            <div >

                <Container style={{marginTop:"2rem",marginBottom:"2rem"}}>   
                    <h1 style={{ color: "#233048",textAlign:"center" }}>Контакты</h1>      
                    <Form onSubmit={this.handleSubmit.bind(this)} style={{ color: "#233048" }}>
                    
                        <Form.Group >
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control id="full-name" type="name" value={this.props.name}  onChange={this.handleInputChange.bind(this)}  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" type="email" value={this.props.email} onChange={this.handleInputChange.bind(this)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" as="textarea" row="3" value={this.props.message} onChange={this.handleInputChange.bind(this)} />
                    </Form.Group>
                    <Button type="submit" value="Submit" style={{ color: "white", backgroundColor: "#50e3c2", borderColor: "#50e3c2" }}>
                        Send
                    </Button>
                </Form>
                </Container>

            </div>
        );
    }
}

export default ContactsPage;