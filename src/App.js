import React from 'react';
import { BrowserRouter as Router,Link,Route} from 'react-router-dom';
import  Container from 'react-bootstrap/Container';
import  NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.png';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import AboutPage from './Pages/AboutPage';
import About2Page from './Pages/About2Page';
import ImprintPage from './Pages/ImprintPage';
import CatalogsPage from './Pages/CatalogsPage';
import Footer from './components/Footer';
import TermometryPage from './ProductPages/TermometryPage';
import AnalitikaPage from './ProductPages/AnalitikaPage';
import DavleniePage from './ProductPages/DavleniePage';
import UrovenPage from './ProductPages/UrovenPage';
import RashodPage from './ProductPages/RashodPage';
import VlazhnostPage from './ProductPages/VlazhnostPage';
import TermostatyPage from './ProductPages/TermostatyPage';
import EtPage from './ProductPages/EtPage';
import TmPage from './ProductPages/TmPage';
import BpPage from './ProductPages/BpPage';
import TpPage from './ProductPages/TpPage';
import RegulyatoryPage from './ProductPages/RegulyatoryPage';
import RegistratoryPage from './ProductPages/RegistratoryPage';
import PoPage from './ProductPages/PoPage';
import IndicatoryPage from './ProductPages/IndicatoryPage';
import Example from './Pages/Example';
import ContactPage from './Pages/ContactsPage';
//import Modal from 'react-bootstrap/Modal';
//import { Col, Row } from 'react-bootstrap';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show:false,
      title:"Jumo.kz",
      headerLinks:[
        { title: 'Главная', path: '/' },
        {title: 'Товары',path:'/product'},
        { title: 'О нас', path: '/about' },
        { title: 'Контакты', path: '/contacts' },
        
      ],
      home:{
        title:'Home',
        text:'Ваш партнер в области сенсорных и автоматических решений'
      },
      product: {
        title: 'Products',
        text: 'Jumo.kz'
      },
      about: {
        title: 'About',
        text: 'Jumo.kz'
      },
      contacts: {
        title: 'Contacts',
        text: 'Jumo.kz'
      },
      about2:{
        title:'Руководство',
        text:'Jumo.kz'
      },
      imprint: {
        title: 'Imprint',
        text: 'english'
      },
      catalogs:{
        title:'Catalogs',
        text:'catalogs'
      },
       termometry: {
        title: 'Termometry',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      analitika: {
        title: 'Analitka',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      davlenie: {
        title: 'Davlenie',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      uroven: {
        title: 'Uroven',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      rashod: {
        title: 'Rashod',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      vlazhnost: {
        title: 'Vlazhnost',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      termostaty: {
        title: 'Termostaty',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      et: {
        title: 'Electronnyetermostaty',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      tm: {
        title: 'Tiristornye moduli',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      bp: {
        title: 'Blok pitaniya',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      tp: {
        title: 'Temperaturnye preobrazovateli',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      regulyatory: {
        title: 'Regulyatory',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      registratory: {
        title: 'Registratory',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      indicatory: {
        title: 'Indicatory',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      po: {
        title: 'Programmnoe obespechenie',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
      example: {
        title: 'Programmnoe obespechenie',
        text: 'Ваш партнер в области сенсорных и автоматических решений'
      },
       }
        }
        handleModal(){
          this.setState({show:!this.state.show})
        }
  
  render(){
    
    return(
      
      
      <div className="page-container" >
        <div className="content-wrap">
      <Router>
        <Container className="p-0" fluid={true} >
          <NavBar className="border-bottom "  variant="dark" expand="xl" sticky="top" fixed="top"  >
            
                <Link to="/"> <NavBar.Brand ><img src={logo} className="d-inline-block align-top" alt="logo" to="/" padding=" 7px 14px"
                 width="150px" height="60px" mt="-7"  /></NavBar.Brand>
            </Link>

                

            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
            
            <NavBar.Collapse id="navbar-toggle">
                  <Nav className="mx-auto " style={{ color: "white" }}>
                <Link className="nav-link" to="/" >Главная</Link>
                    <Link className="nav-link" to="/product" >Товары</Link>
                    <Link className="nav-link" to="/catalogs" >Проспекты</Link>
                    {/*<Link className="nav-link" to="/example" >Example</Link>*/}
                    

                   <NavDropdown title="О Нас" to="/about"  id="collasible-nav-dropdown">
                      <NavDropdown.Item title="О Компании" href="about">О Компании</NavDropdown.Item>
                      <NavDropdown.Item title="Руководство" href="about2">Руководство</NavDropdown.Item>
                      <NavDropdown.Item title="JUMO в мире" href="http://www.jumo.net/">Jumo в мире</NavDropdown.Item>
                      </NavDropdown>
                    {/*<Link className="nav-link" to="/contacts" >Контакты</Link>*/}
                    {/*<Link className="nav-link" to="/product" onClick={()=>{this.handleModal()}} >Товары2</Link>
                    <Modal show={this.state.show}>
                      <Modal.Header closeButton onClick={() => { this.handleModal() }}>Товары</Modal.Header>
                      <Modal.Body style={{ backgroundColor:"#203367"}}>
                        <Row>
                          <Col> <Link to="/regulyatory" style={{ color: "white" }}>Регуляторы</Link>
                          </Col>
                          <Col> <Link to="/termometry" style={{ color: "white" }}>Термометры</Link>
                          </Col>
                          <Col> <Link to="/bp" style={{ color: "white" }}>Блок питания</Link>
                          </Col>
                        </Row>
                        <Row>
                          <Col> <Link to="/indicatory" style={{ color: "white" }}>Индикаторы</Link>
                          </Col>
                          <Col> <Link to="/uroven" style={{ color: "white" }}>Уровень</Link>
                          </Col>
                          <Col> <Link to="/rashod" style={{ color: "white" }}>Расход</Link>
                          </Col>
                        </Row>
                       
                      </Modal.Body>
                    </Modal>*/}
                   {/* <Link className="nav-link">
                         <div className="search-box">
                       <input className="search-txt " type="text" name="" placeholder="Search" />
                        <FontAwesomeIcon icon={faSearch} className="search-btn" to="/product"  href="#"/> 
                      </div>
                  </Link>*/}
                  </Nav>
                  
                    </NavBar.Collapse>
                <Link to="/product">
                  <FontAwesomeIcon style={{ color: "white" }} icon={faSearch} className="ml-5" href="/product" />

                </Link>
          </NavBar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title}  text={this.state.home.text} />} />
          <Route path="/product" render={() => <ProductPage title={this.state.product.title} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
              <Route path="/about2" render={() => <About2Page title={this.state.about2.title} />} />
              <Route path="/contacts" render={() => <ContactPage title={this.state.contacts.title} />} />
              <Route path="/imprint" render={() => <ImprintPage title={this.state.imprint.title} />} />
              <Route path="/catalogs" render={() => <CatalogsPage title={this.state.catalogs.title} />} />
              <Route path="/termometry" render={() => <TermometryPage title={this.state.termometry.title} />} />
              <Route path="/analitika" render={() => <AnalitikaPage title={this.state.analitika.title} />} />
              <Route path="/davlenie" render={() => <DavleniePage title={this.state.davlenie.title} />} />
              <Route path="/uroven" render={() => <UrovenPage title={this.state.uroven.title} />} />
              <Route path="/rashod" render={() => <RashodPage title={this.state.rashod.title} />} />
              <Route path="/vlazhnost" render={() => <VlazhnostPage title={this.state.vlazhnost.title} />} />
              <Route path="/termostaty" render={() => <TermostatyPage title={this.state.termostaty.title} />} />
              <Route path="/et" render={() => <EtPage title={this.state.et.title} />} />
              <Route path="/tm" render={() => <TmPage title={this.state.tm.title} />} />
              <Route path="/bp" render={() => <BpPage title={this.state.bp.title} />} />
              <Route path="/tp" render={() => <TpPage title={this.state.tp.title} />} />
              <Route path="/regulyatory" render={() => <RegulyatoryPage title={this.state.regulyatory.title} />} />
              <Route path="/registratory" render={() => <RegistratoryPage title={this.state.registratory.title} />} />
              <Route path="/indicatory" render={() => <IndicatoryPage title={this.state.indicatory.title} />} />
              <Route path="/po" render={() => <PoPage title={this.state.po.title} />} />
             <Route path="/example" render={() => <Example title={this.state.example.title} />} />

        </Container>
        
      </Router>
        </div>

      <Footer/>
      </div>
                 
    );
  }
}
export default App;
