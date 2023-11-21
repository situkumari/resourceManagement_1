import React, { useState } from "react";
import workapi from "./API/workApi.js";
import {Link} from 'react-router-dom';
const HowItWorks = () => {
  const [workData, setWorkData] = useState(workapi);
  console.log(workData);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it Work</h1>
          <div className="row">
            {workData.map((curElem) => {
              const { id, logo, title,btn } = curElem;
              return (
                <>
                <Link to={`${btn}`}>
                  <div className="col-12 col-lg-4 col-xxl-4 text-center work-container-subdiv" key={id}>
                    <i class={`fontawesome-style text-center${logo}`}></i>
                    <h2 className="sub-heading text-center">{title}</h2>
                   </div>
                   </Link>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
