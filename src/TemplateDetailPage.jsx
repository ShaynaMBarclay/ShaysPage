import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import gothtemp from "./assets/bloodmoon1.png";
import gothtemp2 from "./assets/bloodmoon2.png";
import gothtemp3 from "./assets/bloodmoon3.png";
import gothtemp4 from "./assets/bloodmoon4.png";
import gothtemp5 from "./assets/bloodmoon5.png";
import gothtemp6 from "./assets/bloodmoon6.png";
import fantasytemp1 from "./assets/updatedfantasy1.png";
import fantasytemp2 from "./assets/updatedfantasy2.png";
import fantasytemp3 from "./assets/updatedfantasy3.png";
import fantasytemp4 from "./assets/updatedfantasy4.png";
import fantasytemp5 from "./assets/updatedfantasy5.png";
import pasteltemp1 from "./assets/updatedpastel1.png";
import pasteltemp2 from "./assets/updatedpastel2.png";
import pasteltemp3 from "./assets/updatedpastel3.png";
import pasteltemp4 from "./assets/updatedpastel4.png";

const templates = [
  {
    id: "1",
    title: "Blood Moon/Eclipse Template",
    images: [
      { src: gothtemp3, orientation: "landscape" },
      { src: gothtemp, orientation: "landscape" },
      { src: gothtemp2, orientation: "landscape" },
      { src: gothtemp4, orientation: "landscape" },
      { src: gothtemp5, orientation: "landscape" },
      { src: gothtemp6, orientation: "landscape" },
    ],
    bio: "Gothic Red and Black link in bio style template with an animated blood moon to eclipse in the background, blood rain into a blood puddle on the bottom of the screen effect, red cursor, and custom animations for that gothic feel. Customizable in site with detailed instructions on how to deploy and post online for your very own website! A dark, elegant gothic-inspired aesthetic. Perfect for creators who love moody vibes and sharp contrasts. Responsive and customizable.",
    editorLink: "https://blood-moon-template-editor.netlify.app/",
    demoLink: "https://shaysescape.netlify.app/",
  },
  {
    id: "2",
    title: "Magical Fantasy Template",
    images: [
      { src: fantasytemp1, orientation: "landscape" },
      { src: fantasytemp2, orientation: "landscape" },
      { src: fantasytemp3, orientation: "landscape" },
      { src: fantasytemp4, orientation: "landscape" },
      { src: fantasytemp5, orientation: "landscape" },
    ],
    bio: "Magical Fantasy inspired link in bio style template with a color changing background with sparkles, glowing magical book animation, cute custom cursor, and custom animations. Enchanting, fantasy-inspired, with whimsical fonts and layered visuals. Great for storytellers, artists, and creators. Comes with in site editor and instructions on how to deploy online for your very own website!",
    editorLink: "https://fantasy-template-editor.netlify.app/",
    demoLink: "https://sylvariaes-realm.netlify.app/",
  },
  {
    id: "3",
    title: "Dreamy and Pastel Template",
    images: [
      { src: pasteltemp1, orientation: "landscape" },
      { src: pasteltemp2, orientation: "landscape" },
      { src: pasteltemp3, orientation: "landscape" },
      { src: pasteltemp4, orientation: "landscape" },
    ],
    bio: "A Dreamy Pastel link in bio Template with a cute, pastel design, including multi colored stars animation in the background, floating hearts, cute shiny pastel buttons, and a custom cursor. All customizable. Soft, pastel-colored, designed with an airy and friendly aesthetic. Ideal for personal blogs or portfolio websites, content creators, and anyone who loves to dream in a land of color. Comes with the in site editor and detailed instructions on how to deploy online for your very own website!",
    editorLink: "https://pastel-template-editor.netlify.app/",
    demoLink: "https://sylvs-star.netlify.app/",
  },
];

function TemplateDetail() {
  const { id } = useParams();
  const template = templates.find((t) => t.id === id);
  const { hash } = useLocation();

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  if (!template) return <p>Template not found</p>;

  return (
    <div className="detail-page">
      {/* Moon */}
      <div className="moon"></div>

      {/* Stars */}
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
        {template.editorLink && (
          <a
            href={template.editorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="editor-btn"
          >
            ✏️ Open Template Editor
          </a>
        )}

        {/* Bio */}
        <p className="template-bio">{template.bio}</p>

        {/* Demo Link */}
        <a
          href={template.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="demo-link"
        >
          🔗 View Example Site
        </a>

        {/* Gallery */}
        <div className="image-gallery">
          {template.images.map((img, idx) => (
            <div className="image-item" key={idx}>
              <img
                src={img.src}
                alt={`${template.title} preview ${idx + 1}`}
                className={`detail-img ${
                  img.orientation === "portrait" ? "portrait" : "landscape"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Buy Now Button 
        <a
          href={template.buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="buy-btn"
        >
          💖 Buy Now
        </a>

        {/* Tutorial Button 
        {template.tutorialLink && (
          <a
            href={template.tutorialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="tutorial-btn"
          >
            🎥 Video Tutorial Here
          </a>
        )} */}

        {/* Back Button */}
        <Link to="/shop" className="back-link">
          ← Back to Shop
        </Link>
      </div>
    </div>
  );
}

export default TemplateDetail;
