import { useState } from "react";

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
      {/* White Eclipse */}
      <div className="white-eclipse"></div>

      <p className="welcome-text">♡ Press to Enter ♡</p>
    </div>
  );
}
