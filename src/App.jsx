// 1. import useState from React
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // 2. Create weather state with default "Sunny"
const[weather, setWeather] = useState("Sunny")


  // 3. import useEffect from React



  // 4. Create handleRainy function
  // change weather to "Rainy"
const handleRainy = () => {
  setWeather("Rainy")
};


  // 5. Create handleSnowy function
  // change weather to "Snowy"
const handleSnowy = () => {
  setWeather("Snowy")
};


  // 6. Create handleHot function
  // change weather to "Hot"
const handleHot = () => {
  setWeather("Hot")
};


  // 7. Create handleReset function
  // change weather back to "Sunny"
const handleReset = () => {
    setWeather("Sunny");
  };


  // 8. Add useEffect that runs when weather changes
  // show alerts based on weather value
useEffect(() => {
    if (weather === "Rainy") {
      alert("Take an umbrella.");
    } else if (weather === "Snowy") {
      alert("Wear a coat.");
    } else if (weather === "Hot") {
      alert("Drink water.");
    } else if (weather === "Sunny") {
      alert("Enjoy the sunshine.");
    }
  }, [weather]); 

  return (
    <div className="page">
      <div className="card">
        <h1>Weather Warning App</h1>
        <p className="subtitle">
          Practice using useEffect with weather changes.
        </p>

        <div className="weather-box">
          <h2>Current Weather</h2>

          {/* 9. Display weather here */}
          <p className="output">Weather: {weather} </p>

          <button
            className="btn"
            onClick={handleRainy}// 10. connect to handleRainy
          >
            Rainy 🌧️
          </button>

          <button
            className="btn"
            onClick={handleSnowy}// 11. connect to handleSnowy
          >
            Snowy ❄️
          </button>

          <button
            className="btn"
            onClick={handleHot}// 12. connect to handleHot
          >
            Hot ☀️
          </button>

          <button
            className="btn secondary"
            onClick={handleReset}// 13. connect to handleReset
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;