import React, { useEffect, useRef } from "react";
import "./MainCards.css";
import cards_data from "../../assets/cards/Cards_data";

const MainCards = () => {
  const cardsRef = useRef();
  const handleWhweel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWhweel);
  }, []);
  return (
    <div className="maincards">
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="card images" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainCards;
