import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Signup() {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [Password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const signup = () => {
    console.log("Signup initiated");
    let user = {
      email,
      password: Password,
      name,
      userRole: role,
    };
    console.log("Payload to API:", user);

    axios
      .post("http://localhost:8080/api/auth/signup", user)
      .then(() => {
        
        navigate("/signin"); 
      })
      .catch((e) => {
        if (e.response) {
          console.error("Response error:", e.response.data, e.response.status);
        } else {
          console.error("Request error:", e.message);
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Sign Up</h2>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

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

              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Role (0 for Admin, 1 for User)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="role"
                  placeholder="Enter role"
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>

              <button className="btn btn-primary w-100" onClick={signup}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
