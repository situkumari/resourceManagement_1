import React from 'react';

import { useEffect } from "react";
import bgm from "./snacks.jpg"
import bgm1 from "./snacks1.jpg"

function Foods() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
        <>
        <h1>FOOD</h1>
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
                    
                         <h2>Food(Before Event Started)</h2>
                         <br></br>
                         <br></br>
                         <p>Biscuits,Mixture,Watter Bottle,Chocolates</p>
                         <br></br>
                         <h3>How Many Time: Only Once</h3>
                         <br></br>
                         <br></br>
                         <h3>Type: Snacks</h3>

                </div>
                
                </div>
                
                <br></br>
                <br></br>
                <div class="containt-2">
                <div class="img">
                    <img src={bgm1} alt="" width="100%" height="100%" className="img-1"/>
                </div>
                <div class="para">
                    
                         <h2>Food(After Completing the Event)</h2>
                         <br></br>
                         <br></br>
                         <p>Samosa,Gulab Jamun,Jhillapi,Puri,Steam</p>
                         <br></br>
                         <h3>How Many Time: Two Time</h3>
                         <br></br>
                         <br></br>
                         <h3>Type:Snacks</h3>
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

export default Foods;