import React from 'react';
import {Carousel} from 'react-bootstrap';

function Carou(props) {
    return(
        <div>
            <Carousel style={{ width: "75%", height: "110%", display: "flex",margin:"auto",marginBottom:"2rem",marginTop:"2rem"}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28428.jpg?resize=1000px:1000px&crop=864:486;77,257"
                        alt="First slide"
                    />
                    
                    <Carousel.Caption style={{ textAlign: "center", margin: "auto",fontSize:"0.5rem",padding:"2rem" }}>
                      
                    
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28432.jpg?resize=864px:618px&crop=864:486;0,66"
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ textAlign: "center", margin: "auto", fontSize: "0.4rem", padding: "2rem" }}>
                       
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28431.jpg?resize=864px:568px&crop=864:486;0,41"
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ textAlign: "center", margin: "auto", fontSize: "0.5rem", padding: "2rem" }}>
                        
                        
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
}

export default Carou;