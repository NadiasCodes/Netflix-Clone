import React, { useEffect, useRef, useState } from "react";
import "./MainCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const MainCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjhhNTdiNTI5MGFiYTBhNzMyYWQ2OGMxZjc2MTBkNyIsInN1YiI6IjY2MzYxOTQ2YzM5MjY2MDEyNjZlZDJjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MCf4Ss_cscsQpo3XNLiOsJ3GYOydmS8cMXWxEhpOxTE",
    },
  };

  const handleWhweel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWhweel);
  }, []);
  return (
    <div className="main-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="card images" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainCards;
