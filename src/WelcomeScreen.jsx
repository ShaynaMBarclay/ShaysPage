import { useEffect, useState } from "react";
import welcomeImg from "./assets/sylvbean.png"

export default function WelcomeScreen({ onEnter }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      onEnter();
    }, 1000); 
  };

  return (
    <div className={`welcome-screen ${fadeOut ? "fade-out" : ""}`} onClick={handleClick}>
      <img src={welcomeImg} alt="Welcome" className="welcome-img" />
      <p className="welcome-text">♡ Click to enter ♡</p>
    </div>
  );
}
