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
      <div className="detail-container">
        <h1>{template.title}</h1>
        <img
          src={template.image}
          alt={template.title}
          className="detail-img"
        />
        <h2>Coming Soon!</h2>
        <Link to="/shop" className="back-link">← Back to Shop</Link>
      </div>
    </div>
  );
}

export default TemplateDetail;
