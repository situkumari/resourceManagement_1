import React, { useState } from "react";
import serviceapi from "./API/serviceApi.js";
import {Link} from 'react-router-dom';

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            Check Our Resources
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, btn } = curElem;
              return (
                <>
                <Link to={`${btn}`}>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}>
                    <i className={`fontawesome-style text-center ${logo}`}></i>
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

export default Services;
