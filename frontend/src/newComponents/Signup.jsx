import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "../style/Signup.css";  // Import your custom CSS file
import Validation from "../Validation/SignupValidation";

function SignUp() {
  const navigate = useNavigate();
  const [justifyActive, setJustifyActive] = useState("tab2");
  const [signUpInfo, setSignUpInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    nic: "",
    dob: "",
    gender: "",
  });
  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleJustifyClick = (value) => {
    if (value !== justifyActive) {
      setJustifyActive(value);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const validationErrors = Validation(signUpInfo);
    setError(validationErrors);

    if (
      !validationErrors.mobile &&
      !validationErrors.email &&
      !validationErrors.password &&
      !validationErrors.nic
    ) {
      try {
        const response = await axios.post('https://localhost:7250/api/Customer/CustomerRegister', signUpInfo);
        console.log(response.data);
        toast.success("Successfully registered");
        evt.target.reset();
      } catch (error) {
        const errorMsg = error.response?.data || "An error occurred while registering.";
        toast.error(errorMsg);
        console.error('An error occurred:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <div className="header">
          <h1>Sri Lankan Bus Booking System</h1>
        </div>
        <div className="tabs">
          <button
            className={`tab ${justifyActive === "tab1" ? "active" : ""}`}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className={`tab ${justifyActive === "tab2" ? "active" : ""}`}
            onClick={() => handleJustifyClick("tab2")}
          >
            Register
          </button>
        </div>

        {justifyActive === "tab2" && (
          <div className="tab-content">
            <div className="form-row">
              <input
                className="form-input"
                placeholder="First Name"
                name="firstName"
                type="text"
                onChange={handleChange}
                required
              />
              <input
                className="form-input"
                placeholder="Last Name"
                name="lastName"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            <input
              className="form-input"
              placeholder="Email"
              name="email"
              type="email"
              onChange={handleChange}
              required
            />
            {error.email && <p className="error-text">{error.email}</p>}
            <input
              className="form-input"
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
              required
            />
            {error.password && <p className="error-text">{error.password}</p>}
            <div className="form-row">
              <input
                className="form-input"
                placeholder="Phone Number"
                name="phoneNumber"
                type="tel"
                onChange={handleChange}
                required
              />
              {error.mobile && <p className="error-text">{error.mobile}</p>}
              <input
                className="form-input"
                placeholder="NIC Number"
                name="nic"
                type="text"
                onChange={handleChange}
                required
              />
              {error.nic && <p className="error-text">{error.nic}</p>}
            </div>
            <div className="form-row">
              <label>
              Date of birth
              <input
                className="form-input"
                placeholder="Birthday"
                name="dob"
                type="date"
                onChange={handleChange}
                required
              />
             
              </label>
              <div className="gender-selection">
                <label>
                  <input
                    name="gender"
                    value="female"
                    type="radio"
                    onChange={handleChange}
                    required
                  />
                  Female
                </label>
                <label>
                  <input
                    name="gender"
                    value="male"
                    type="radio"
                    onChange={handleChange}
                    required
                  />
                  Male
                </label>
                
              </div>
            </div>
            <label>
              <input
                name="terms"
                type="checkbox"
                required
              />
              I have read and agree to the terms!
            </label>
            <button type="submit" className="submit-btn">Sign up</button>
          </div>
        )}
      </div>
    </form>
  );
}

export default SignUp;
