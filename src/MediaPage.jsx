import React from 'react';
import { Link } from 'react-router-dom';

function MediaPage() {
  return (
    <div className="container">
      
      <div className="media-section">
        <h2>World of Warcraft</h2>
        <div className="media-gallery">
          <div className="media-item">
            <img src="/src/assets/wow1.png" alt="WoW 1" />
          </div>
          <div className="media-item">
            <img src="/src/assets/wow2.jpeg" alt="WoW 2" />
          </div>
          <div className="media-item">
            <img src="/src/assets/wow3.jpeg" alt="WoW 3" />
          </div>
          <div className="media-item">
            <img src="/src/assets/wow4.jpeg" alt="WoW 4" />
          </div>
          <div className="media-item">
            <img src="/src/assets/wow5.jpeg" alt="WoW 5" />
          </div>
          <div className="media-item">
            <img src="/src/assets/wow6.png" alt="WoW 6" />
          </div>
          <div className="media-item">
            <img src="/src/assets/wow7.png" alt="WoW 7" />
          </div>
          <div className="media-item">
            <img src="/src/assets/wow8.png" alt="WoW 8" />
          </div>
          <div className="media-item">
            <img src="/src/assets/wow9.png" alt="WoW 9" />
          </div>
          <div className="media-item">
            <img src="/src/assets/wow10.jpeg" alt="WoW 10" />
          </div>
          <div className="media-item">
            <img src="/src/assets/wow11.png" alt="WoW 11" />
          </div>
        </div>
      </div>

      <div className="media-section">
        <h2>Final Fantasy XIV</h2>
        <div className="media-gallery">
          <div className="media-item">
            <img src="/src/assets/ff1.jpeg" alt="FFXIV 1" />
          </div>
           <div className="media-item">
            <img src="/src/assets/ff2.png" alt="FFXIV 2" />
          </div>
          <div className="media-item">
            <img src="/src/assets/ff3.jpeg" alt="FFXIV 3" />
          </div>
          <div className="media-item">
            <img src="/src/assets/ff4.png" alt="FFXIV 4" />
          </div>
          <div className="media-item">
            <img src="/src/assets/ff5.jpeg" alt="FFXIV 5" />
          </div>
        </div>
      </div>

      <div className="media-section">
        <h2>Baldur's Gate 3</h2>
        <div className="media-gallery">
          <div className="media-item">
            <img src="/src/assets/bg1.jpeg" alt="BG3 1" />
          </div>
          <div className="media-item">
            <img src="/src/assets/bg2.jpeg" alt="BG3 2" />
          </div>
          <div className="media-item">
            <img src="/src/assets/bg3.jpeg" alt="BG3 3" />
          </div>
        </div>
      </div>

      <div className="media-section-button">
        <Link to="/" className="my-media-button">← Back to Main</Link>
      </div>
    </div>
  );
}

export default MediaPage;
