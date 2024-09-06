import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import SignUp from './newComponents/Signup';
import Query from './components/Query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './newComponents/Login';
import Home from './components/Home';
import Home2 from './admin/Home';
import Menu from './components/Menu';
import OrderDetails from './components/OrderDetails';
import Facility from './components/Facility';
import Review from './components/Review';
import Reservation from './components/Reservation';




import About from './components/About';
import Gallery from './components/Gallery';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/admin" element={<Home2/>} /> 
    <Route path="/gallery" element={<Gallery/>} /> 
     <Route path="/signup" element={<SignUp/>} /> 
    <Route path="/login" element={<Login/>} />
    <Route path="/query" element={<Query/>} />
    <Route path="/aboutUs" element={<About/>} />
    <Route path="/menu" element={<Menu/>} /> 
    <Route path="/facility" element={<Facility/>} /> 
    <Route path="/orderdetails" element={<OrderDetails/>} /> 
    <Route path="/review" element={<Review/>} /> 
    <Route path="/reservation" element={<Reservation/>} />
   
      </Routes>
      </BrowserRouter>
  );
}

export default App;
