import React from 'react';

import { useEffect } from "react";
import bgm from "./room1.jpeg"
import bgm1 from "./room2.jpeg"
import bgm2 from "./room3.jpeg"
import bgm3 from "./room4.jpeg"
import bgm4 from "./320 no room.jpeg"

function Rooms() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
        <>
        <h1>ROOMS</h1>
        <br />
        <br />
          <div className="main">
            
            <br></br>
            <br></br>
            <br></br>
            <div class="containt">
                <div class="containt-1">
                <div>
                    <img src={bgm} alt="" width="100%" height="100%" className="img-1"/>
                </div>
                <div class="para">
                    
                      <h2> Seminar Hall no-6 Ground Floor CUTM</h2>
                      <br></br>
                      <p>Parking,Reception,Free Wi-Fi,Snacks</p>
                      <br></br>
                      <h4>Maximum Capacity:120</h4>
                      <br></br>
                      <h4>Aryabhatta Building</h4>
                      <br></br>
                      <h4>Type:Delux</h4>

                      </div>
                
                </div>
                
                <br></br>
                <br></br>
                <div class="containt-2">
                <div class="img">
                    <img src={bgm1} alt="" width="100%" height="100%" className="img-1"/>
                </div>
                <div class="para">
                    
                   <h2> Auditorium Hall CUTM</h2>
                      <br></br>
                      <p>Parking,Reception,Free Wi-Fi,Snacks</p>
                      <br></br>
                      <h4>Maximum Capacity:100</h4>
                      <br></br>
                      <h4>Madhusudan Building</h4>
                      <br></br>
                      <h4>Type:Delux</h4>
                
                
                </div>
                </div>
               
                <br></br>
                <br></br>
                <div class="containt-3">
                <div class="img">
                    <img src={bgm2} alt="" width="100%" height="100%" className="img-1"/>
                </div>
                <div class="para">
                    
                         <h2>Board Room First Floor CUTM</h2>
                      <br></br>
                      <p>Parking,Reception,Free Wi-Fi,Snacks</p>
                      <br></br>
                      <h4>Maximum Capacity:70</h4>
                      <br></br>
                      <h4>Aryabhatta Building</h4>
                      <br></br>
                      <h4>Type:Delux</h4>
                
                </div>
                </div>
               
                <br></br>
                <br></br>
                <div class="containt-4">
                <div class="img">
                    <img src={bgm3} alt="" width="100%" height="100%" className="img-1"/>
                </div>
                <div class="para">
                    
                         <h2>Room no-18 Ground Floor CUTM</h2>
                      <br></br>
                      <p>Parking,Reception,Free Wi-Fi,Snacks</p>
                      <br></br>
                      <h4>Maximum Capacity:60</h4>
                      <br></br>
                      <h4>Aryabhatta Building</h4>
                      <br></br>
                      <h4>Type:Delux</h4>
                
                </div>
                </div>
                
                <br></br>
                <br></br>
                <div class="containt-5">
                <div class="img">
                    <img src={bgm4} alt="" width="100%" height="100%" className="img-1"/>
                </div>
                <div class="para">
                    
                         <h2> Room no-320 3rd Floor CUTM</h2>
                      <br></br>
                      <p>Parking,Reception,Free Wi-Fi,Snacks</p>
                      <br></br>
                      <h4>Maximum Capacity:80</h4>
                      <br></br>
                      <h4>Aryabhatta Building</h4>
                      <br></br>
                      <h4>Type:Non-Delux</h4>
                
                </div>
                </div>
                
                <br></br>
                <br></br>
            </div>



          </div>
     
        </>
      
    </div>
  );
}

export default Rooms;