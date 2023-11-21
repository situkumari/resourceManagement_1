import React from 'react';

import { useEffect } from "react";
import bgm from "./ct.jpg"
import bgm1 from "./sofa.jpg"
import bgm2 from "./deskbench.png"
import bgm3 from "./chair.jpg"


function Furnitures() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
        <>
        <h1>FURNITURES</h1>
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
           
                    <h2 align="center">Chair and Table</h2>
                    <h4 align="center">Availability:150</h4>
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
                
                    <h2 align="center">Sofa</h2>
                    <h4 align="center">Availability:80</h4>
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
             
                    <h2 align="center">Desk and Bench</h2>
                    <h4 align="center">Availability:500</h4>
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
                  
                    <h2 align="center">VIP Chair</h2>
                    <h4 align="center">Availability:120</h4>
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

export default Furnitures;