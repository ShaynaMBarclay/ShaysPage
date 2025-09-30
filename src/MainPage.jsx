import './Styles/App.css';
import pfp from './assets/gifpfp.gif';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";  
import { useState, useEffect } from 'react';

function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [message, setMessage] = useState("");
  const fullText = `₊˚⊹⋆ Welcome to my World ₊⊹ 
I love romance animes, 
fantasy books & RPGs. 
I'm a tech girly too ๋࣭ ⭑✮💻₊ ⊹ `;
  const [typedText, setTypedText] = useState("");

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100); 
    return () => clearInterval(interval);
  }, []);

  // Falling stars/kaomojis inside the card
  useEffect(() => {
    const starContainer = document.querySelector('.falling-stars');
    const emojis = ['★', '☆', '♡', '✧', '✩'];

    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star-emoji');
      star.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      star.style.left = `${Math.random() * 100}%`;
      star.style.fontSize = `${Math.random() * 20 + 10}px`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      starContainer.appendChild(star);
      setTimeout(() => star.remove(), 5000);
    };

    const interval = setInterval(createStar, 400);
    return () => clearInterval(interval);
  }, []);

  // Background stars & moon
  useEffect(() => {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 150; i++) {
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
    fetch("https://formspree.io/f/mldlbeda", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent! Thank you! 💌");
          setMessage("");
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch(() => alert("Oops! Something went wrong."));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="falling-stars"></div>
        <img src={pfp} alt="profile" className="pfp" />
        <h1>Hi, I'm Shay ♡</h1>

        <div className="about-container">
          <div className="socials">
            <a href="https://x.com/sylvariae" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/shaydotexe/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@sylvariae" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>

          <p style={{
            whiteSpace: 'pre-line',
            fontFamily: '"Caveat", cursive',
            fontSize: '1.7rem',
            letterSpacing: '0.15em',
            textAlign: 'center',
          }}>
            {typedText}
          </p>
        </div>

        <div className="pink-divider"></div>

        {/* === Template Shop Section Added Above Things I've Made === */}
        <div className="template-shop-section">
          <Link to="/shop" className="shop-link-button">💻 Visit My Template Shop</Link>
        </div>

        <div className="pink-divider"></div>

        <div className="projects">
          <h2>Things I've made ᝰ.ᐟ </h2>
          <div className="project-buttons">
            <a href="https://skindexanalyzer.com/" target="_blank" rel="noopener noreferrer">The Skindex</a>
            <a href="https://myhappylittlejournal.com/" target="_blank" rel="noopener noreferrer">My Happy Lil Journal</a>
            <a href="https://angyportal.love/" target="_blank" rel="noopener noreferrer">Angy Portal</a>
            <a href="https://lune.cards/" target="_blank" rel="noopener noreferrer">Moon & Cards</a>
            <a href="https://lacucinadishay.com/" target="_blank" rel="noopener noreferrer">Shay's Kitchen</a>
            <a href="https://pathfinders-tale.com/" target="_blank" rel="noopener noreferrer">Pathfinder's Tale</a>
          </div>
        </div>

        <div className="pink-divider"></div>

        <div className="media-section">
          <Link to="/media" className="my-media-button">Click here for my Media</Link>
        </div>

        <div className="pink-divider"></div>

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="message">Send me a message💌ᯓ★</label>
          <textarea
            id="message"
            name="message"
            placeholder="write something sweet..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>

        <div className="pink-divider"></div>

        <div className="songs">
          <h2>─•──── 𖦤</h2>
          <div className="embed">
            <iframe
              style={{ borderRadius: '12px' }}
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
              style={{ borderRadius: '12px' }}
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
              style={{ borderRadius: '12px' }}
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
