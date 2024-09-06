import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../components/css/Navbar.css'; 

const NavBar = () => {
  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const loggedInAdmin = localStorage.getItem("admin");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else if (loggedInAdmin) {
      const foundAdmin = JSON.parse(loggedInAdmin);
      setAdmin(foundAdmin);
    }
  }, []);

  return (
    <nav>
      <div>
        <h1>ABC RESTAURANT</h1>  {/* Heading added here */}
      </div>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/aboutUs">ABOUT US</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/Query">QUERY</Link>
        <Link to="/facility">FACILITY</Link>
        <Link to="/review">REVIEW</Link>
        <Link to="/reservation">RESERVATION</Link>
      </div>
      <div>
        {(user || admin) ? (
          <a
            onClick={() => {
              localStorage.clear();
            }}
            href="/login"
          >
            Logout
          </a>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
