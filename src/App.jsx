import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import MovieRecommendations from "./components/MovieRecommendations";

const App = () => {
  // Example data (replace with actual data fetched from API)
  const [commemorativeEvents, setCommemorativeEvents] = useState([
    {
      id: 1,
      name: "Event 1",
      movies: [
        {
          id: 101,
          title: "Movie 1A",
          description: "Description for Movie 1A",
          poster: "https://example.com/poster1A.jpg",
        },
        {
          id: 102,
          title: "Movie 1B",
          description: "Description for Movie 1B",
          poster: "https://example.com/poster1B.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Event 2",
      movies: [
        {
          id: 201,
          title: "Movie 2A",
          description: "Description for Movie 2A",
          poster: "https://example.com/poster2A.jpg",
        },
        {
          id: 202,
          title: "Movie 2B",
          description: "Description for Movie 2B",
          poster: "https://example.com/poster2B.jpg",
        },
      ],
    },
  ]);

  // Example date for the Card component
  const todayDate = new Date().toLocaleDateString();

  return (
    <div>
      <Card date={todayDate} />
      <MovieRecommendations commemorativeEvents={commemorativeEvents} />
    </div>
  );
};

export default App;
