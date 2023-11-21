import React from 'react';

import { useEffect } from "react";
import bgm from "./tubelight.jpeg"
import bgm1 from "./fan.jpg"
import bgm2 from "./ac.jpg"
import bgm3 from "./projector.jpg"


function Electronics1() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
        <>
        <h1>ELECTRONICS</h1>
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
                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
           
                    <h2 align="center">Tubelight</h2>
                    <h4 align="center">Availability:300</h4>
                </div>
                
                </div>
                
                <br></br>
                <br></br>
                <div class="containt-2">
                <div class="img">
                    <img src={bgm1} alt="" width="100%" height="100%" className="img-1"/>
                </div>
                <div class="para">
                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
           
                    <h2 align="center">Fan</h2>
                    <h4 align="center">Availability:680</h4>
                </div>
                </div>
                
                <br></br>
                <br></br>
                <div class="containt-3">
                <div class="img">
                    <img src={bgm2} alt="" width="100%" height="100%" className="img-1"/>
                </div>
                <div class="para">
                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
           
                    <h2 align="center">AC</h2>
                    <h4 align="center">Availability:200</h4>
                </div>
                </div>
                
                <br></br>
                <br></br>
                <div class="containt-4">
                <div class="img">
                    <img src={bgm3} alt="" width="100%" height="100%" className="img-1"/>
                </div>
                <div class="para">
                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
           
                    <h2 align="center">Projector</h2>
                    <h4 align="center">Availability:75</h4>
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

export default Electronics1;