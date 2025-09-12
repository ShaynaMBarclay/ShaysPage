import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import template1 from "./assets/goth.png";
import template2 from "./assets/pastel.png";

const templates = [
  { id: "1", title: "Gothic Solar Eclipse Template", image: template1 },
  { id: "2", title: "Pastel Goth Template", image: template2 },
];

function TemplatesShop() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
     window.scrollTo(0, 0);
     
    setFadeIn(true);
  }, []);

  return (
    <div className={`main-container ${fadeIn ? "fade-in" : ""}`}>
      <div className="stars">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="moon"></div>

      <div className="container">

        {/* === Return to Main Page Button === */}
        <div className="return-main-button-container">
          <Link to="/" className="return-main-button">← Return to Main Page</Link>
        </div>

        <h1>Templates Shop</h1>
        <p>Click on a template to view details. The shop is still in the works. More templates and detailed template descriptions, including images, screen recordings, and tutorials will be added soon!</p>

        <div className="template-grid">
          {templates.map((template) => (
            <Link
              to={`/shop/${template.id}`}
              key={template.id}
              className="template-card"
            >
              <img
                src={template.image}
                alt={template.title}
                className="template-card-img"
              />
              <h2>{template.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplatesShop;
