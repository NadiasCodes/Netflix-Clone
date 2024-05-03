import React from "react";
import "./MainCards.css";
import cards_data from "../../assets/cards/Cards_data";
const MainCards = () => {
  return (
    <div className="maincards">
      <h2>Popular on Netflix</h2>
      <div className="card-list">
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="card images" className="popular-images" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainCards;
