import React, { useState } from "react";

const Logins = () => {
  const [userData, setUserData] = useState({
   
    username: "",
    password: "",
    type:""
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
    const { username, password,type } = userData;

    if (username && password && type) {
      const res = fetch(
        "https://reactfirebasewebsite-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            
            username,
            password,
            type
          }),
        }
      );

      if (res) {
        setUserData({
          
          username: "",
          password: "",
          Type:""
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
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <img
                      src="./images/cutm1.png"
                      alt="contatUsImg"
                      className="img-fluid"
                      
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <h1 style={{ textAlign: "center" }}>Login</h1>
                  <br></br>
                  <form method="POST">
                    <div className="row">
                      
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="username"
                          id=""
                          className="form-control"
                          placeholder="username"
                          value={userData.username}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
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

                     <br></br>
                     <br></br>
                     <br></br>

                    <div className="row">
                      <div className="col-12 ">
                      <select>
                    <option>type</option>
                     
                      
                        <option value="admin">Admin</option>
                        <option value="customer">Customer</option>
                     
                        
                    
                </select>

                    
                      </div>
                    </div>

                    






                    <div class="form-check form-checkbox-style">
                      
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}>
                      Login
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

export default Logins;
