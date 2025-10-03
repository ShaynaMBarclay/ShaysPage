import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import template1 from "./assets/gothtemp2.png";
import template2 from "./assets/fantasytemp1.png";
import template3 from "./assets/pasteltemp2.png";

const templates = [
  { id: "1", title: "Gothic Eclipse Template", image: template1 },
  { id: "2", title: "Fantasy Template", image: template2 },
  { id: "3", title: "Pastel Template", image: template3 },
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
        <p>
          Click on a template to view more details! If you have any questions or need support, please send me a message on the main page, and include your contact information. Please refer to the{" "}
           <Link to="/shop/1#refund-policy"
           className="custom-cursor-link"
            style={{ color: "#ff6392", textDecoration: "underline" }}>
             refund policy
          </Link>{" "}
          before making any purchases.
          </p>

          {/* === Custom Link-in-Bio Section === */}
            <div className="custom-link-bio">
             <p>Looking for something unique? Please include a contact as well as details about your idea! I will get back to you soon.</p>
               <Link 
               to="/#message"
               className="custom-bio-button"
               style={{ color: "#ff6392", textDecoration: "underline", fontWeight: "bold" }}
                >
                Request a custom Link-in-Bio site ✨
               </Link>
               </div>

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
