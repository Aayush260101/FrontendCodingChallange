import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 



function Signin() {
  const [email, setMail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const signin = () => {
    let login = { email, password: Password };
    axios
      .post("http://localhost:8080/api/auth/login", login)
      .then((res) => {
        let token = res.data.jwt;
        localStorage.setItem("token", token);

        

        navigate("/"); 
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Sign In</h2>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button className="btn btn-primary w-100" onClick={signin}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
