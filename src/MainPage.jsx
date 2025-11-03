import './Styles/App.css';
import pfp from './assets/gifpfp.gif';
import { Link, useLocation } from 'react-router-dom';
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FaTiktok, FaPinterest } from "react-icons/fa6";
import { useState, useEffect } from 'react';

function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const fullText = `₊˚⊹⋆ Welcome to my World ₊⊹ 
I love romance animes, 
fantasy books & RPGs. 
I'm a tech girly too ๋࣭ ⭑✮💻₊ ⊹ `;

const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  // Typing effect
 // useEffect(() => {
    //let index = 0;
    //const interval = setInterval(() => {
     // setTypedText((prev) => prev + fullText.charAt(index));
     // index++;
    //  if (index === fullText.length) clearInterval(interval);
  //  }, 100);
   // return () => clearInterval(interval);
 // }, []);

  // Glittering stars inside the card
  useEffect(() => {
    const starContainer = document.querySelector('.falling-stars');
    const emojis = ['★', '☆', '★', '✮', '★', '✮'];

    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star-emoji');
      star.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.fontSize = `${Math.random() * 20 + 10}px`;
      starContainer.appendChild(star);
      setTimeout(() => star.remove(), 4000);
    };

    const interval = setInterval(createStar, 300);
    return () => clearInterval(interval);
  }, []);

  // Background stars & moon
  useEffect(() => {
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

    return () => {
      starsContainer.remove();
      moon.remove();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please include your email before submitting 💌");
      return;
    }

    alert("Messaging is temporarily closed 💌 Please check back soon, or message me on Twitter @Sylvariae for help. And to the one harassing me, may you find peace (and maybe a nice patch of grass) 💕");

    //fetch("https://formspree.io/f/mldlbeda", {
      //method: "POST",
     // headers: { "Content-Type": "application/json" },
      //body: JSON.stringify({ name, email, message }),
    //})
      //.then((response) => {
       // if (response.ok) {
       //   alert("Message sent! Thank you! 💗");
        //  setName("");
         // setEmail("");
         //setContact("");
       //   setMessage("");
       // } else {
       //   alert("Oops! Something went wrong. Please try again.");
      //  }
     // })
     // .catch(() => alert("Oops! Something went wrong."));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="falling-stars"></div>
        <img src={pfp} alt="profile" className="pfp" />
        <h1>Hi, I'm Shay ♡</h1>

        <div className="about-container">
          <div className="socials" id="socials">
            <a href="https://x.com/sylvariae" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              💗<FaTwitter />
            </a>
            <a href="https://www.instagram.com/shaydotexe/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              💗<FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@shaydotexe" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              💗<FaTiktok />
            </a>
            <a href="https://www.pinterest.com/shaydotexe/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              💗<FaPinterest />
            </a>
          </div>

         <p className="bio-glow">
          {fullText}
         </p>
        </div>

        <div className="pink-divider"></div>

        {/* === Template Shop Section === */}
        <div className="template-shop-section" id="shop">
          <Link to="/shop" className="shop-link-button">
            💻 Visit My Template Shop
          </Link>
        </div>

        <div className="pink-divider"></div>

        <div className="projects" id="projects">
          <h2>Things I've made✨.ᐟ </h2>
          <div className="project-buttons">
            <a href="https://skindexanalyzer.com/" target="_blank" rel="noopener noreferrer">
              The Skindex
            </a>
            <a href="https://myhappylittlejournal.com/" target="_blank" rel="noopener noreferrer">
              My Happy Lil Journal
            </a>
            <a href="https://angyportal.love/" target="_blank" rel="noopener noreferrer">
              Angy Portal
            </a>
            <a href="https://lune.cards/" target="_blank" rel="noopener noreferrer">
              Moon & Cards
            </a>
            <a href="https://lacucinadishay.com/" target="_blank" rel="noopener noreferrer">
              Shay's Kitchen
            </a>
            <a href="https://pathfinders-tale.com/" target="_blank" rel="noopener noreferrer">
              Pathfinder's Tale
            </a>
          </div>
        </div>

        <div className="pink-divider"></div>

        <div className="media-section" id="media">
          <Link to="/media" className="my-media-button">
            Click here for my Media🎬
          </Link>
        </div>

        <div className="pink-divider"></div>

        {/* === Updated Contact Form === */}
        <form className="form" id="message" onSubmit={handleSubmit}>
          <label htmlFor="message">Send me a message💌ᯓ★</label>

          <input
            type="text"
            name="name"
            placeholder="Your name (required)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email (required)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

           <input
            type="text"
            name="contact"
            placeholder="Other forms of contact (optional)"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />

          <textarea
            id="message"
            name="message"
            placeholder="Write your message here 💫"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">Send</button>
        </form>

        <div className="pink-divider"></div>

        <div className="songs" id="music">
          <h2>─•──── 𖦤</h2>
          <div className="embed">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/0hKjGGWCAthLTNAbO5drvs?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="embed">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/2qc2uSwYlXSg5msv7VZ81c?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="embed">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/7dQrAIlUHD9DpA3wUxpaDW?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
