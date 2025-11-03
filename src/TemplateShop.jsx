import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import template1 from "./assets/bloodmoon1.png";
import template2 from "./assets/updatedfantasy1.png";
import template3 from "./assets/updatedpastel1.png";

const templates = [
  { id: "1", title: "Blood Moon/Eclipse Template", image: template1 },
  { id: "2", title: "Magical Fantasy Template", image: template2 },
  { id: "3", title: "Dreamy and Pastel Template", image: template3 },
];

function TemplatesShop() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

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
          <Link to="/" className="return-main-button">
            ← Return to Main Page
          </Link>
        </div>

        <h1>Customizable "link in bio" website editors</h1>

        <p>
          Click on a template to use its editor, it’s free! But if you love it
          ♡, please consider leaving a tip on my{" "}
          <a
            href="https://ko-fi.com/shaydotexe"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ff6392",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Ko-fi
          </a>
          . If you have any questions or need support, please send me a message
          on the main page and include your contact information.
        </p>

        {/* === Custom Link-in-Bio Section === */}
        <p>
          Looking for something unique? Please include a contact as well as
          details about your idea! I will get back to you soon. Please refer to
          the{" "}
          <a
            href="#refund-policy"
            onClick={(e) => {
              e.preventDefault();
              const refundSection = document.getElementById("refund-policy");
              if (refundSection) {
                refundSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="custom-cursor-link"
            style={{ color: "#ff6392", textDecoration: "underline" }}
          >
            refund policy
          </a>{" "}
          before making any purchases.
        </p>

        <Link
          to="/#message"
          className="custom-bio-button"
          style={{
            color: "#ff6392",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Request a custom Link-in-Bio site ✨
        </Link>

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

        {/* Refund Policy */}
        <div className="refund-policy" id="refund-policy">
          <h2>Refund Policy -- Please disregard if you did not request a commission.</h2>
          <p>
            Thank you so much for your support! Each commission is made by hand
            with care and time investment, so please review the policy below
            before placing your order.
          </p>

          <h3>Custom Commissions</h3>
          <p>
            All commissions are personalized digital services. Because each
            piece is created specifically for you, refunds are generally not
            available once work has begun.
          </p>

          <h3>Cancellations</h3>
          <p>
            If you wish to cancel your commission, please contact me within 24
            hours of payment. If I haven’t started the project yet, I’ll
            happily provide a full refund. Once work has started, refunds are
            no longer possible.
          </p>

          <h3>Revisions</h3>
          <p>
            Minor revisions are included to ensure you’re happy with the final
            result! Major changes or complete redesigns may require an
            additional fee, depending on the scope.
          </p>

          <h3>Exceptional Circumstances</h3>
          <p>Refunds may be considered only if:</p>
          <ul>
            <li>The commission has not yet started, and</li>
            <li>You contact me within 24 hours of payment.</li>
          </ul>

          <h3>Support</h3>
          <p>
            I want you to absolutely love your finished commission! If you have
            any questions or need assistance during or after the process, please
            reach out through the main page in the "Send Me a Message" section.
            Be sure to include a contact method (email, Twitter, TikTok,
            Instagram, or Discord) so I can get back to you quickly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TemplatesShop;
