import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/css/Gallery.css'; 

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7250/api/Gallery/CustomerGet')
      .then(response => {
        setGalleryImages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the gallery images!', error);
      });
  }, []);

  return (
    <div>
      <h1><center>GALLERY ABC RESTURANT</center></h1>
      <div className="gallery">
        {galleryImages.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.url} alt={image.description} />
            <div className="gallery-info">
              <h2>{image.resturant.name}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
