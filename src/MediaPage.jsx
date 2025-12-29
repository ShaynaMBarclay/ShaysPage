import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function MediaPage() {
   const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // === Background stars + moon ===
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 3 + 1 + 'px';
      star.style.width = size;
      star.style.height = size;
      star.style.top = Math.random() * 100 + 'vh';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.animationDuration = Math.random() * 2 + 1 + 's';
      starsContainer.appendChild(star);
    }

    const moon = document.createElement('div');
    moon.className = 'moon';
    document.body.appendChild(moon);

    // Cleanup on unmount
    return () => {
      starsContainer.remove();
      moon.remove();
    };
  }, []);
  

  return (
    <div className="container">
      <div className="container media-container">

        {/* === Back to Main Button at Top === */}
        <div className="media-section-button" style={{ marginBottom: '2rem' }}>
          <Link to="/" className="my-media-button">← Back to Main</Link>
        </div>

        {/* === World of Warcraft Section === */}
        <div className="media-section">
          <h2>World of Warcraft</h2>

          <div className="media-gallery">
            <div className="media-item"><img src="/media/wowpic1.png" alt="WoW 12.5" /></div>
            <div className="media-item"><img src="/media/wowpic2.png" alt="WoW 5" /></div>
            <div className="media-item"><img src="/media/wowpic4.png" alt="WoW 8" /></div>
            <div className="media-item"><img src="/media/wow5.jpeg" alt="WoW 5" /></div>
            <div className="media-item"><img src="/media/wowsept.jpeg" alt="WoW 12" /></div>
            <div className="media-item"><img src="/media/wowsept2.jpeg" alt="WoW 13" /></div>
            <div className="media-item"><img src="/media/wow18.jpg" alt="WoW 5" /></div>
            <div className="media-item"><img src="/media/wowsept3.jpeg" alt="WoW 14" /></div>
          </div>
        </div>

        {/* === Final Fantasy XIV Section === */}
        <div className="media-section">
          <h2>Final Fantasy XIV</h2>
          <div className="media-gallery">
            <div className="media-item"><img src="/media/ff1.jpeg" alt="FFXIV 1" /></div>
            <div className="media-item"><img src="/media/ffxiv2.png" alt="FFXIV 2" /></div>
            <div className="media-item"><img src="/media/ffxiv3.png" alt="FFXIV 3" /></div>
            <div className="media-item"><img src="/media/ffxiv5.png" alt="FFXIV 5" /></div>
          </div>
        </div>

        {/* === Baldur's Gate 3 Section === */}
        <div className="media-section">
          <h2>Baldur's Gate 3</h2>
          <div className="media-gallery">
            <div className="media-item"><img src="/media/bg1.jpeg" alt="BG3 1" /></div>
            <div className="media-item"><img src="/media/bg3two.png" alt="BG3 3" /></div>
            <div className="media-item"><img src="/media/bg2.jpeg" alt="BG3 2" /></div>
            <div className="media-item"><img src="/media/bg3.jpeg" alt="BG3 3" /></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MediaPage;
