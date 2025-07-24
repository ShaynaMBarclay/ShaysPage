import './Styles/App.css';
import pfp from './assets/pfp.jpg';

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={pfp} alt="profile" className="pfp" />
        <h1>Hi, I'm Shay!-`♡´-</h1>
        <p>₊˚⊹⋆Welcome to my World₊⊹</p>

        <form className="form">
          <label htmlFor="message">Send me a message💌ᯓ★</label>
          <textarea id="message" placeholder="write something sweet..."/>
            <button type="submit">Send</button>
        </form>

        <div className="songs">
          <h2>─•──── 𖦤</h2>
          <ul>
            <li>
              <a href="https://open.spotify.com/track/0hKjGGWCAthLTNAbO5drvs?si=35e065f3b1ed4072" target="_blank">Song1</a>
              <a href="https://open.spotify.com/track/2qc2uSwYlXSg5msv7VZ81c?si=a6bb4f07b3554b98" target="_blank">Song2</a>
              <a href="https://open.spotify.com/track/7dQrAIlUHD9DpA3wUxpaDW?si=a4b7b94b521e4e5f" target="_blank">Song3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;