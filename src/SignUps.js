

import React, { useState } from "react";

const SignUps = () => {
  const [userData, setUserData] = useState({
    username: "",
    phone: "",
    email: "",
    password:"",
    
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { username, phone, email, password } = userData;

    if (username && phone && email && password ) {
      const res = fetch(
        "https://reactfirebasewebsite-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            phone,
            email,
            password,
           
          }),
        }
      );

      if (res) {
        setUserData({
          username: "",
          phone: "",
          email: "",
          password: "",
          
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
      <section className="contactus-section ">
        <div className="container">
          <div className="row">
            <div className="col-7 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  
                  <figure>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <img
                      src="./images/cutm.jpg"
                       alt="contatUsImg"
                      className="img-fluid "
                       />
                  </figure>
                </div>

               
                <div className="contact-rightside col-12 col-lg-7">
                  <h1 style={{ textAlign: "center" }}>SignUp</h1>
                  <br></br>
                  <form method="POST">
                    <div className="row">
                      <div className="col-12  contact-input-feild">
                        <input
                          type="text"
                          name="userName"
                          id=""
                          className="form-control"
                          placeholder="username"
                          value={userData.userName}
                          onChange={postUserData}
                        />
                      </div>
                     
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="phone"
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="email"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="password"
                          name="password"
                          id=""
                          className="form-control"
                          placeholder="password"
                          value={userData.password}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                       <button
                      type="signup"
                      className="btn btn-style w-100"
                      onClick={submitData}>
                      SignUp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUps;
