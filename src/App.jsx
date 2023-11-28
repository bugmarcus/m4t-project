// App.jsx

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card/Card.vue";
import MovieRecommendations from "./components/MovieRecommendations/MovieRecommendations.vue";
import "./App.css";

const App = () => {
  const [commemorativeEvents, setCommemorativeEvents] = useState([]);

  // Fetch commemorative events (replace with your actual data fetching logic)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API or data fetching logic
        const response = await fetch("/path-to-your-data.json");
        const data = await response.json();

        setCommemorativeEvents(data.events);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Card commemorativeEvents={commemorativeEvents} />
      <MovieRecommendations />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
