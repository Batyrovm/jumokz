import React from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import "./Footer.css"
import first from '../icons/1.jpg';
import second from '../icons/2.jpg';
import third from '../icons/3.jpg';
import fourth from '../icons/4.jpg';
import fifth from '../icons/5.jpg';
import sixth from '../icons/6.jpg';
import seventh from '../icons/7.jpg';
import eight from '../icons/8.jpg';
import nine from '../icons/9.jpg';
import ten from '../icons/10.jpg';
import eleven from '../icons/11.jpg';
import twelve from '../icons/12.jpg';
import thirteen from '../icons/13.jpg';
import fourteen from '../icons/14.jpg';
import fiveteen from '../icons/15.jpg';
import { Navbar } from "react-bootstrap";

class SideBar extends React.Component {
    
    render(){
        return (
            <Router>
                <Navbar fixed="left" sticky="left">
                    
            <div className="sidebar">
               <Link to="/product"> 
               <h2 style={{ textAlign: "center",color:"white",fontSize:"25px",marginTop:"1rem",paddingTop:"1rem" }}> 
                Все Товары</h2>
               </Link>
                        <Navbar.Collapse id="navbar-toggle">
                <Nav defaultActiveKey="/home" className="flex-column" >
                                
                                
                 <Nav.Link style={{ color: "white" }} href="/termometry ">
                <Image src={first} style={{borderRadius:"1000px",width:"35px",height:"30px"}}/> Термометры</Nav.Link>
                 <Nav.Link style={{ color: "white" }} href="/analitika">
                <Image src={second} style={{ borderRadius: "100px", width: "35px", height: "30px" }} /> Аналитика</Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/davlenie">
                <Image src={third} style={{ borderRadius: "100px", width: "35px", height: "30px" }} /> Давление</Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/uroven">
                <Image src={fourth} style={{ borderRadius: "100px", width: "35px", height: "30px" }} /> Уровень</Nav.Link>
                 <Nav.Link style={{ color: "white" }} href="/rashod">
                <Image src={fifth} style={{ borderRadius: "100px", width: "35px", height: "30px" }} /> Расход</Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/vlazhnost">
                <Image src={sixth} style={{ borderRadius: "100px", width: "35px", height: "30px" }} /> Влажность</Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/termostaty">
                <Image src={seventh} style={{ borderRadius: "100px", width: "35px", height: "30px" }} /> Термостаты</Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/et">
                <Image src={eight} style={{ borderRadius: "100px", width: "35px", height: "30px" }} />Электронные термостаты
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/tm">
                <Image src={nine} style={{ borderRadius: "100px", width: "35px", height: "30px" }} /> Тиристорные модули
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/bp">
                <Image src={ten} style={{ borderRadius: "100px", width: "35px", height: "30px" }} />Блок питания</Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/tp">
                <Image src={eleven} style={{ borderRadius: "100px", width: "35px", height: "30px" }} />Температурные преобразователи
                </Nav.Link>
                    <Nav.Link style={{ color: "white" }} href="/regulyatory">
                 <Image src={twelve} style={{ borderRadius: "100px", width: "35px", height: "30px" }} /> Регуляторы</Nav.Link>
                    <Nav.Link style={{ color: "white" }} href="/registratory">
                <Image src={thirteen} style={{ borderRadius: "100px", width: "35px", height: "30px" }} /> Регистраторы</Nav.Link>
                 <Nav.Link style={{ color: "white" }} href="/indicatory">
                 <Image src={fourteen} style={{ borderRadius: "100px", width: "35px", height: "30px" }} />Индикаторы</Nav.Link>
                 <Nav.Link style={{ color: "white" }} href="/po">
                 <Image src={fiveteen} style={{ borderRadius: "100px", width: "35px", height: "30px" }} />Программное обеспечение
                 </Nav.Link>
               
                    
                </Nav>
                        </Navbar.Collapse>
                
            </div>
                    
                </Navbar>
            </Router>
        )
    }
    
}

export default SideBar