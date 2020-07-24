import React from 'react';
import './Footer.css';
//import Link from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';


function Footer(props) {
    return(
        <footer>
        <div className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col" style={{marginRight:"2em"}}>
                             
                            <h5>JUMO GmbH & Co. KG в Казахстане</h5>
                    <ul className="list-unstyled">
                                <li>г. Алматы 050000</li>
                                <li>ул. Гоголя 86</li>
                                <li>офис 724</li>
                    </ul>
                    <a href="/imprint" style={{color:"white"}}>Imprint</a>
                </div>
         {/*col2 */}
         <div className="col">
         <h5>Контакты</h5>
         <ul className="list-unstyled">
                                <li>Телефоны:</li><li> +7 (727) 250 56 77</li>
                                <li> +7 (727) 250 56 99</li>
                                <li> +7(727) 250 37 98 (факс)</li>
                               {/* <li>Cот. тел.:</li> 
                                <li>+7(701) 319-13-99</li>
                               <li>+7(701) 784-10-25</li>*/}
                                <li>Эл. почта:</li> 
                                <li>info@jumo.kz </li>
                                <li> too-imago@mail.ru</li>
         </ul>
         </div>
         {/*col3 */}
         <div className="col">
                        <h5>Мы в социальных сетях</h5>
                        <ul className="list-unstyled">
                                <li>
                                    <SocialIcon network="whatsapp" style={{ height: 40, width: 40,marginRight:"1em",marginBottom:"1em" }}
                                     url="http://whatsapp.com" target="_blank" /> 
                                    <SocialIcon network="instagram" style={{ height: 40, width: 40, marginRight: "1em", marginBottom:"1em"}} 
                                    url="http://instagram.com" target="_blank" />
                                    <SocialIcon network="facebook" style={{ height: 40, width: 40, marginRight: "1em", marginBottom: "1em"}} 
                                    url="http://facebook.com" target="_blank" />
                                    <SocialIcon network="twitter" style={{ height: 40, width: 40, marginRight: "1em", marginBottom: "1em" }} 
                                    url="http://twitter.com" target="_blank" />
                                    
                                     </li>
                            
                        </ul>
         </div>
            </div>
            <hr/>
            <div classname="row">
                <p className="col-sm" style={{textAlign:"center"}}>
                    &copy;{new Date().getFullYear()} JUMO.kz | All right reserved |Privacy
                </p>
            </div>
        </div>
        </div>
        </footer>
    );
}

export default Footer;