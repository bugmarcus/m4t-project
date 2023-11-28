import React from "react";

const Card = () => {
  // Get today's date
  const today = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("pt-BR", options);

  return (
    <div className="card">
      <div className="card-header">
        <h2>{formattedDate}</h2>
      </div>
    </div>
  );
};

export default Card;
