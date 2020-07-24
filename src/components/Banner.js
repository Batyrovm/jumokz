import React from 'react';
import './Banner.css'
//import {Container} from 'react-bootstrap';
import videobg from '../images/video.mp4';
import { Card } from 'react-bootstrap';

function Banner(props) {
    return(
    <div className="video1" style={{margin:"auto"}}>
        <video autoPlay loop muted style={{ 
            position:"absolute",
            width:"100%",
            height:"700px",
            top:"0px",       
            objectFit:"cover",
            zIndex:"-1",
            paddingTop:"1em"
            
            }}>
            
                
                
            <source src={videobg} type="video/mp4"/>
                
               

        </video>
       
       <div classname="heading" style={{marginTop:"4em",justifyContent:"center",display:"flex"
            }}>
                <Card classname="card" style={{
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor:"rgba(0,0,0,0)",
                    opacity:"1",
                    height: "400px", width: "1000px", borderRadius: "70px", padding: "3rem",marginBottom:"2rem",
                    minWidth:"500px",maxWidth:"100%"

                }}>
               <Card.Body >
                   <Card.Title>
                            <h1 style={{
                                textAlign: "center", color: "white", marginTop: "1rem", fontSize: "2.3rem", display: "block"
                            
                            
                         }}>
                                Ваш партнер в области сенсорных и автоматических решений</h1>
                   </Card.Title>
                       {/* <p style={{ textAlign: "center", justifyContent: "center", alignSelf: "center" }}>
                            <Button style={{
                                backgroundColor: "#50e3c2",
                                color: "#203367", alignItems: "center", borderColor: "#50e3c2", marginTop: "1rem",
                                borderRadius: "10px",fontSize:"1.5rem"
                            }}>Для выбора помощи</Button>
                        </p>*/}
               </Card.Body>
           </Card>
                
               
          
       </div>
            
           
        
    </div>
      
        
    );
}
export default Banner;