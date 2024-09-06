import React, { useState } from 'react';
  import '../style/view_styles.css';
import seat from '../components/images/8.jpg'
import airline from '../components/images/9.jpg'
import sairline from '../components/images/10.jpg'
import airhos from '../components/images/11.jpg'

function ImageGallery() {
  const [expandedImage, setExpandedImage] = useState('');
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openImage = (imageSrc) => {
    setExpandedImage(imageSrc);
    setIsOverlayOpen(true);
  };

  const closeImage = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div>
      <div className="image-grid">
        <div className="image-item">
          <img src={airline} alt="Image 1" onClick={() => openImage(airhos)} />
        </div>
        <div className="image-item">
          <img src={seat} alt="Image 2" onClick={() => openImage(seat)} />
        </div>
        <div className="image-item">
          <img src={airhos} alt="Image 1" onClick={() => openImage(airhos)} />
        </div>
        <div className="image-item">
          <img src={sairline} alt="Image 2" onClick={() => openImage(sairline)} />
        </div>
        
      </div>

      {isOverlayOpen && (
        <div className="image-overlay" onClick={closeImage}>
          <div className="overlay-content">
            <span className="close-button" onClick={closeImage}>&times;</span>
            <img src={expandedImage} alt="Expanded Image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
