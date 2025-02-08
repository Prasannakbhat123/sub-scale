import React from 'react';
import '../css/Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery_wrapper">
      <h1 className="gallery_title">Gallery</h1>
      <div className="gallery_container">
        <div className="gallery_horizontal">
          <img src="/assets/images/gallery/img1.jpg" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_vertical">
          <img src="/assets/images/gallery/img2.webp" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_item">
          <img src="/assets/images/gallery/img3.webp" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_big">
          <img src="/assets/images/gallery/img4.webp" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_vertical">
          <img src="/assets/images/gallery/img11.jpg" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_horizontal">
          <img src="/assets/images/gallery/img15.jpg" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_item">
          <img src="/assets/images/gallery/img7.jpg" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_horizontal">
          <img src="/assets/images/gallery/img16.jpg" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_item">
          <img src="/assets/images/gallery/img9.jpg" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_item">
          <img src="/assets/images/gallery/img10.jpg" alt="Beautiful Vinyl Floor" />
        </div>
        
        {/* Add More Images */}
        <div className="gallery_big">
          <img src="/assets/images/gallery/img14.jpg" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_vertical">
          <img src="/assets/images/gallery/img12.jpg" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_item">
          <img src="/assets/images/gallery/img13.jpg" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_horizontal">
          <img src="/assets/images/gallery/img5.webp" alt="Beautiful Vinyl Floor" />
        </div>
        <div className="gallery_item">
          <img src="/assets/images/gallery/img17.jpg" alt="Beautiful Vinyl Floor" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
