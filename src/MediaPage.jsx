import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function MediaPage() {
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">

        <div className="container media-container">
      
      <div className="media-section">
        <h2>World of Warcraft</h2>
        <div className="media-gallery">
          <div className="media-item"><img src="/media/wow1.png" alt="WoW 1" /></div>
          <div className="media-item"><img src="/media/wow2.jpeg" alt="WoW 2" /></div>
          <div className="media-item"><img src="/media/wow3.jpeg" alt="WoW 3" /></div>
          <div className="media-item"><img src="/media/wow4.jpeg" alt="WoW 4" /></div>
          <div className="media-item"><img src="/media/wow5.jpeg" alt="WoW 5" /></div>
          <div className="media-item"><img src="/media/wow6.png" alt="WoW 6" /></div>
          <div className="media-item"><img src="/media/wow7.png" alt="WoW 7" /></div>
          <div className="media-item"><img src="/media/wow8.png" alt="WoW 8" /></div>
          <div className="media-item"><img src="/media/wow9.png" alt="WoW 9" /></div>
          <div className="media-item"><img src="/media/wow10.jpeg" alt="WoW 10" /></div>
          <div className="media-item"><img src="/media/wow11.png" alt="WoW 11" /></div>
        </div>
      </div>

      <div className="media-section">
        <h2>Final Fantasy XIV</h2>
        <div className="media-gallery">
          <div className="media-item"><img src="/media/ff1.jpeg" alt="FFXIV 1" /></div>
          <div className="media-item"><img src="/media/ff2.png" alt="FFXIV 2" /></div>
          <div className="media-item"><img src="/media/ff3.jpeg" alt="FFXIV 3" /></div>
          <div className="media-item"><img src="/media/ff4.png" alt="FFXIV 4" /></div>
          <div className="media-item"><img src="/media/ff5.jpeg" alt="FFXIV 5" /></div>
        </div>
      </div>

      <div className="media-section">
        <h2>Baldur's Gate 3</h2>
        <div className="media-gallery">
          <div className="media-item"><img src="/media/bg1.jpeg" alt="BG3 1" /></div>
          <div className="media-item"><img src="/media/bg2.jpeg" alt="BG3 2" /></div>
          <div className="media-item"><img src="/media/bg3.jpeg" alt="BG3 3" /></div>
        </div>
      </div>

      <div className="media-section-button">
        <Link to="/" className="my-media-button">← Back to Main</Link>
      </div>
      </div>
    </div>
  );
}

export default MediaPage;
