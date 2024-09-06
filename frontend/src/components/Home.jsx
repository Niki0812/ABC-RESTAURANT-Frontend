import React, { useEffect,useState } from 'react'
import Footer from './Footer'
import Header from './Header'

import Navbar from './Navbar'
import flight1 from '../components/images/images/flight1.jpg';
import flight2 from '../components/images/images/flight2.jpg';
import flight3 from '../components/images/images/flight3.jpg';
  import '../style/Home.css';
import ImageGallery from './ImageGallery'
import Axios from "axios";
import Contact from './Contact'

const Home = () => {
  const [user, setUser] = useState({ id: null });
  useEffect(()=>{

  const loggedInUser = localStorage.getItem("user");
   
  if (loggedInUser) {
    const foundUser = JSON.parse(loggedInUser);
    setUser(foundUser);
  } 

 },[])
console.log(user)
console.log(user.id)
 const [currentSlide, setCurrentSlide] = useState(0);
 const cardWidth = document.querySelector('.card') ? document.querySelector('.card').offsetWidth : 0;

 const moveSlider = (direction) => {
   let newSlideIndex = currentSlide;
   if (direction === 'next') {
     newSlideIndex++;
     if (newSlideIndex >= 3) {
       newSlideIndex = 0;
     }
   } else if (direction === 'prev') {
     newSlideIndex--;
     if (newSlideIndex < 0) {
       newSlideIndex = 2;
     }
   }
   setCurrentSlide(newSlideIndex);
 };

 


  return (
    <div className='Home'>
      <Navbar/>
        <Header/>
      
      
       
    

        
       
    </div>
    
  )
}

export default Home