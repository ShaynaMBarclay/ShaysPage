import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MediaPage() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // === Background stars + moon ===
    const starsContainer = document.createElement("div");
    starsContainer.className = "stars";
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 3 + 1 + "px";
      star.style.width = size;
      star.style.height = size;
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      star.style.animationDuration = Math.random() * 2 + 1 + "s";
      starsContainer.appendChild(star);
    }

    const moon = document.createElement("div");
    moon.className = "moon";
    document.body.appendChild(moon);

    // Cleanup on unmount
    return () => {
      starsContainer.remove();
      moon.remove();
    };
  }, []);

  // Close on ESC
  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  // Optional: lock scroll while open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <div className="container">
      <div className="container media-container">
        {/* === Back to Main Button at Top === */}
        <div className="media-section-button" style={{ marginBottom: "2rem" }}>
          <Link to="/" className="my-media-button">
            ← Back to Main
          </Link>
        </div>

        {/* === World of Warcraft Section === */}
        <div className="media-section">
          <h2>World of Warcraft</h2>

          <div className="media-gallery">
            <div className="media-item">
              <img
                src="/media/wowpic1.png"
                alt="WoW 12.5"
                onClick={() => setLightbox("/media/wowpic1.png")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/wowpic2.png"
                alt="WoW 5"
                onClick={() => setLightbox("/media/wowpic2.png")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/wowpic4.png"
                alt="WoW 8"
                onClick={() => setLightbox("/media/wowpic4.png")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/wow5.jpeg"
                alt="WoW 5"
                onClick={() => setLightbox("/media/wow5.jpeg")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/wowsept.jpeg"
                alt="WoW 12"
                onClick={() => setLightbox("/media/wowsept.jpeg")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/wowsept2.jpeg"
                alt="WoW 13"
                onClick={() => setLightbox("/media/wowsept2.jpeg")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/wow18.jpg"
                alt="WoW 5"
                onClick={() => setLightbox("/media/wow18.jpg")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/wowsept3.jpeg"
                alt="WoW 14"
                onClick={() => setLightbox("/media/wowsept3.jpeg")}
              />
            </div>
          </div>
        </div>

        {/* === Final Fantasy XIV Section === */}
        <div className="media-section">
          <h2>Final Fantasy XIV</h2>
          <div className="media-gallery">
            <div className="media-item">
              <img
                src="/media/ff1.jpeg"
                alt="FFXIV 1"
                onClick={() => setLightbox("/media/ff1.jpeg")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/ffxiv2.png"
                alt="FFXIV 2"
                onClick={() => setLightbox("/media/ffxiv2.png")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/ffxiv3.png"
                alt="FFXIV 3"
                onClick={() => setLightbox("/media/ffxiv3.png")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/ffxiv5.png"
                alt="FFXIV 5"
                onClick={() => setLightbox("/media/ffxiv5.png")}
              />
            </div>
          </div>
        </div>

        {/* === Baldur's Gate 3 Section === */}
        <div className="media-section">
          <h2>Baldur's Gate 3</h2>
          <div className="media-gallery">
            <div className="media-item">
              <img
                src="/media/bg1.jpeg"
                alt="BG3 1"
                onClick={() => setLightbox("/media/bg1.jpeg")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/bg3two.png"
                alt="BG3 3"
                onClick={() => setLightbox("/media/bg3two.png")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/bg2.jpeg"
                alt="BG3 2"
                onClick={() => setLightbox("/media/bg2.jpeg")}
              />
            </div>
            <div className="media-item">
              <img
                src="/media/bg3.jpeg"
                alt="BG3 3"
                onClick={() => setLightbox("/media/bg3.jpeg")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
              ×
            </button>
            <img className="lightbox-image" src={lightbox} alt="Expanded view" />
          </div>
        </div>
      )}
    </div>
  );
}

export default MediaPage;
