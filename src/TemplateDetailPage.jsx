import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import gothtemp from "./assets/gothtemp1.png";
import gothtemp2 from "./assets/gothtemp2.png";
import fantasytemp1 from "./assets/fantasytemp1.png";
import fantasytemp2 from "./assets/fantasytemp2.png";
import pasteltemp1 from "./assets/pasteltemp1.png";
import pasteltemp2 from "./assets/pasteltemp2.png";

const templates = [
  {
    id: "1",
    title: "Gothic Eclipse Template",
    images: [
      { src: gothtemp, orientation: "landscape" },
      { src: gothtemp2, orientation: "portrait" },
    ],
    bio: "Gothic Red and Black link in bio style template with an Eclipse in the background, blood rain effect, red cursor, and custom animations for that gothic feel. Customizable with detailed instructions on how to edit. A dark, elegant gothic-inspired aesthetic. Perfect for creators who love moody vibes and sharp contrasts. Responsive and customizable.",
    demoLink: "https://shaysescape.netlify.app/",
    buyLink: "https://ko-fi.com/s/e0eb3902fc",
  },
  {
    id: "2",
    title: "Fantasy Template",
    images: [
      { src: fantasytemp1, orientation: "portrait" },
      { src: fantasytemp2, orientation: "landscape" },
    ],
    bio: "Fantasy inspired link in bio style template with a color changing background with sparkles, glowing magical book animation, cute custom cursor, and custom animations. Enchanting, fantasy-inspired, with whimsical typography and layered visuals. Great for storytellers, artists, and creators.",
    demoLink: "https://sylvariaes-realm.netlify.app/",
    buyLink: "https://ko-fi.com/s/f47ad74939",
  },
  {
    id: "3",
    title: "Pastel Template",
    images: [
      { src: pasteltemp1, orientation: "landscape" },
      { src: pasteltemp2, orientation: "portrait" },
    ],
    bio: "A Pastel link in bio Template with a cute, pastel design, including a crescent moon and stars animation, floating hearts, cute shiny pastel buttons, and a custom cursor. All customizable. Soft, pastel-colored, designed with an airy and friendly aesthetic. Ideal for personal blogs or portfolio websites.",
    demoLink: "https://sylvs-star.netlify.app/",
    buyLink: "https://ko-fi.com/s/fe15753ef1",
  },
];

function TemplateDetail() {
  const { id } = useParams();
  const template = templates.find((t) => t.id === id);
  const { hash } = useLocation();

  
  // Scroll to section if hash exists
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

        {/* Bio */}
        <p className="template-bio">{template.bio}</p>

        {/* Links */}
        <a
          href={template.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="demo-link"
        >
          🔗 View example Site
        </a>


        {/* Gallery of images */}
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

        <a
          href={template.buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="buy-btn"
        >
          💖 Buy Now
        </a>

        <div className="refund-policy" id="refund-policy">
  <h2>Refund Policy</h2>
  <p>
    Thank you for supporting my shop! Please read my refund policy carefully before making a purchase.
  </p>

  <h3>Digital Products</h3>
  <p>
    All items in this shop are digital downloads. Because digital files cannot be “returned” once downloaded, all sales are final and non-refundable.
  </p>

  <h3>Accidental Purchases / Duplicate Orders</h3>
  <p>
    If you purchased the same item more than once by mistake, please contact me within 48 hours of purchase. I’ll be happy to issue a refund for duplicate orders.
  </p>

  <h3>File Issues</h3>
  <p>
    If you experience problems accessing or opening your files, please reach out to me at <strong>[your email/contact info]</strong>. I’ll gladly help you resolve the issue and make sure you receive your templates.
  </p>

  <h3>Exceptions</h3>
  <p>Refunds may be considered on a case-by-case basis only if:</p>
  <ul>
    <li>You never downloaded the files, and</li>
    <li>You contact me within 7 days of purchase.</li>
  </ul>

  <h3>Support</h3>
  <p>
    I want you to be happy with your purchase! If you need assistance customizing or using your template, please feel free to reach out on the homepage in the send me a message section. Please note that I can only respond as long as you provide a contact such as email, Twitter/ Tik Tok/ Instagram or Discord handle. I’ll do my best to help.
  </p>
</div>


        {/* Back button */}
        <Link to="/shop" className="back-link">
          ← Back to Shop
        </Link>
      </div>
    </div>
  );
}

export default TemplateDetail;
