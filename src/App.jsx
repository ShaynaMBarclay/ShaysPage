import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import MainPage from "./MainPage";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered ? (
        <WelcomeScreen onEnter={() => setEntered(true)} />
      ) : (
        <MainPage />
      )}
    </>
  );
}

export default App;
