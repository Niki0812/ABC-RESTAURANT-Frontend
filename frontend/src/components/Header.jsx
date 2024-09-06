import React from 'react'

import { Link } from "react-router-dom";

import { useEffect,useState } from "react";


import Background1 from "../components/images/offer3.jpg";
import Background2 from "../components/images/offer4.jpg";
import Background3 from "../components/images/offer3.jpg";
import Background4 from "../components/images/offer4.jpg";
import Background5 from "../components/images/offer3.jpg";
import Background6 from "../components/images/offer4.jpg";
import Menu from '../components/Menu';
const Header = () => {

  const backgrounds = [Background1, Background2, Background3,Background4, Background5, Background6];
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


    const [user, setUser] = useState({ id: null, firstName: "", lastName: "Guest" });
    const [admin, setAdmin] = useState(false);
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
  

console.log(user)


  return (
    <header>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${backgrounds[backgroundIndex]})`,
          height: "700px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3"><b>ABC RESTURANT OFFERS</b></h1>
              {!admin && user && <h4 className="mb-3">{user.firstName + " " + user.lastName} </h4>}
              {admin && <h4 className="mb-3"> {admin.name}</h4>}
              
              <Link to="/menu" style={{ backgroundColor: "#ff5733", color: "white", padding: "10px 20px", borderRadius: "5px", textDecoration: "none" }}>
  Order Food
</Link>

            
            </div>
          </div>
        </div>
      </div>

      
    </header>
  )
}

export default Header
