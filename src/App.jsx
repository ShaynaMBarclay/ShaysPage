import './Styles/App.css';
import pfp from './assets/pfp.jpg';
import divider from './assets/div2.jpg';
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from 'react';


function App() {

    const [message, setMessage] = useState("");

    useEffect(() => {
  const heartContainer = document.querySelector('.falling-hearts');

  const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '♡';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.animationDuration = `${Math.random() * 5 + 4}s`;
    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000); 
  };

  const interval = setInterval(createHeart, 500);

  return () => clearInterval(interval);
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
      <div className="falling-hearts"></div>
      <div className="card">
        <img src={pfp} alt="profile" className="pfp" />
        <h1>Hi, I'm Shay!-`♡´-</h1>

        <div className="about-container">
        <p>₊˚⊹⋆ Welcome to my World ₊⊹ <br />
        I love romance animes, <br /> fantasy books & RPGs. <br />
        I'm a tech girly too ๋࣭ ⭑✮💻₊ ⊹ <br /> </p>

        <div className="socials">
        <a href="https://x.com/ctrlaltcherie" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter  />
        </a>
        <a href="https://www.instagram.com/shaydotexe/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ marginLeft: '1rem' }}>
        <FaInstagram  />
       </a>
       </div>
       </div>

       <img src={divider} alt="decorative divider" className="divider-image" />

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

        <img src={divider} alt="decorative divider" className="divider-image" />

        <div className="projects">
        <h2>Things I've made ᝰ.ᐟ </h2>
        <div className="project-buttons">
         <a href="https://skindexanalyzer.com/" target="_blank" rel="noopener noreferrer">The Skindex</a>
         <a href="https://myhappylittlejournal.com/" target="_blank" rel="noopener noreferrer">My Happy Lil Journal</a>
         <a href="https://angyportal.love/" target="_blank" rel="noopener noreferrer">Angy Portal</a>
        </div>
       </div>

       <img src={divider} alt="decorative divider" className="divider-image" />

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

export default App;
