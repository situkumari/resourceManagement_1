import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Resource Management System <br /> .....
              </h1>
              <p className="main-hero-para">
              Resource management is the practice of planning, scheduling, 
              and allocating people, money, and technology to a project or program.
               In essence, it is the process of allocating resources to achieve the greatest organizational value.
              </p>
              
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/hero5.jpeg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="./images/hero6.png"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
