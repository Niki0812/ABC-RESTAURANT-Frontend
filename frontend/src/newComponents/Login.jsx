import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Auth from '../utils/Auth';
import '../style/Login.css'; 

const Login = () => {
  const [user, setUser] = useState();
  const [admin, setAdmin] = useState();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const loggedInAdmin = localStorage.getItem("admin");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      navigate("/");
    } else if (loggedInAdmin) {
      const foundAdmin = JSON.parse(loggedInAdmin);
      setAdmin(foundAdmin);
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (event) => {
    setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    Axios.get(`https://localhost:7250/api/Admin/GetAdminByEmail/${loginInfo.email}`).then((response) => {
      if (response.data.length) {
        Axios.post('https://localhost:7250/api/Admin/Adminlogin', loginInfo)
          .then((response) => {
            localStorage.setItem("admin", JSON.stringify(response.data));
            setAdmin(response.data);
            Auth.userLogin(response.data[0]);
            navigate("/admin");
          })
          .catch((error) => {
            if (error.response && error.response.status === 400) {
              alert(error.response.data);
            } else {
              console.error('An error occurred:', error);
            }
          });
      } else {
        Axios.post('https://localhost:7250/api/Customer/login', loginInfo)
          .then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data));
            setUser(response.data);
            Auth.userLogin(response.data[0]);
            navigate("/");
          })
          .catch((error) => {
            if (error.response && error.response.status === 400) {
              alert(error.response.data);
            } else {
              console.error('An error occurred:', error);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2>ABC RESTAURANT LOGIN PORTAL</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
      <p>
        Not a member?{" "}
        <a href="#!" onClick={() => navigate("/signup")}>
          Register
        </a>
      </p>
      <h4>OR</h4>
      <p>Sign in as</p>
      <button onClick={() => navigate("/")}>GUEST</button>
    </div>
  );
};

export default Login;
