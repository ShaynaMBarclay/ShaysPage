import React from "react";
import { useParams, Link } from "react-router-dom";
import template1 from "./assets/goth.png";
import template2 from "./assets/pastel.png";
import template3 from "./assets/fantasy.png";

const templates = [
  { id: "1", title: "Gothic Solar Eclipse Template", image: template1 },
  { id: "2", title: "Pastel Goth Template", image: template2 },
  { id: "3", title: "Fantasy Template", image: template3 },
];

function TemplateDetail() {
  const { id } = useParams();
  const template = templates.find((t) => t.id === id);

  if (!template) return <p>Template not found</p>;

  return (
    <div className="detail-page">
      {/* Moon */}
      <div className="moon"></div>

      {/* Background stars container */}
      <div className="stars">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: Math.random() * 100 + "vh",
              left: Math.random() * 100 + "vw",
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              opacity: 0.2 + Math.random() * 0.8,
              animationDuration: 1 + Math.random() * 2 + "s",
            }}
          ></div>
        ))}
      </div>

      <div className="detail-container">
        <h1>{template.title}</h1>
        <img src={template.image} alt={template.title} className="detail-img" />
        <h2>Coming Soon!</h2>
        <Link to="/shop" className="back-link">
          ← Back to Shop
        </Link>
      </div>
    </div>
  );
}

export default TemplateDetail;
