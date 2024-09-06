import React, { useState } from 'react';
import '../admin/css/Home.css'; // Import the CSS file for styling
import Gallery from '../admin/Gallery';
import Menu from '../admin/Menu';
import Facility from '../admin/Facility';
import ViewQuery from '../admin/ViewQuery';
import ViewMenu from '../admin/ViewMenu';
import ViewReview from '../admin/ViewReview';
import ViewReservation from '../admin/ViewReservation';

const Home = () => {
  const [view, setView] = useState(null);

  const handleClick = (view) => {
    setView(view);
  };

  return (
    <div className="admin-home">
      <h1><center>Admin Dashboard</center></h1>
      <div className="admin-actions">
        <button onClick={() => handleClick('addMenu')} className="admin-button">
          Add Menu
        </button>
        <button onClick={() => handleClick('addFacility')} className="admin-button">
          Add Facility
        </button>
        <button onClick={() => handleClick('addGallery')} className="admin-button">
          Add Gallery
        </button>
        <button onClick={() => handleClick('viewMenu')} className="admin-button">
          View Menu
        </button>
        <button onClick={() => handleClick('viewQuery')} className="admin-button">
          View Query
        </button>
        <button onClick={() => handleClick('viewReview')} className="admin-button">
          View Review
        </button>
        <button onClick={() => handleClick('viewReservation')} className="admin-button">
          View Reservation
        </button>
        <button onClick={() => handleClick('viewOrder')} className="admin-button">
          View Order
        </button>
        
      </div>
      <div className="admin-content">
        {view === 'addMenu' && <Menu/>} {Menu}
        {view === 'addFacility' && <Facility/>} {Menu}
        {view === 'addGallery' && <Gallery />} {Gallery}
        {view === 'viewMenu' && <ViewMenu />} {ViewMenu}
        {view === 'viewQuery' && <ViewQuery />} {ViewQuery}
        {view === 'viewReview' && <ViewReview />} {ViewReview}
        {view === 'viewReservation' && <ViewReservation />} {ViewReservation}
        {view === 'viewOrder' && <div>View Order Content</div>}
      </div>
    </div>
  );
};

export default Home;
