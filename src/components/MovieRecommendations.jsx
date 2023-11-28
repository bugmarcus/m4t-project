// MovieRecommendations.jsx
import React from "react";
import data from "../data/data.json";

const currentDate = new Date().toISOString().split("T")[0]; // Get current date in "YYYY-MM-DD" format

const MovieRecommendations = () => {
  const filteredEvents = data.commemorativeEvents.filter(
    (event) => event.date === currentDate
  );

  return (
    <div className="movie-recommendations">
      {filteredEvents.map((event) => (
        <div key={event.id} className="event-section">
          <h3>{event.name}</h3>
          <div className="movie-list">
            {event.movies.map((movie) => (
              <div key={movie.id} className="movie-item">
                <img src={movie.poster} alt={movie.title} />
                <div className="movie-details">
                  <h4>{movie.title}</h4>
                  <p>{movie.portugueseTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieRecommendations;
