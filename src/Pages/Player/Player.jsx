import React, { useEffect, useState } from "react";
import "./Player.css";
import ArrowIcon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({ name: "", key: "", published_at: "", typeof: "" });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjhhNTdiNTI5MGFiYTBhNzMyYWQ2OGMxZjc2MTBkNyIsInN1YiI6IjY2MzYxOTQ2YzM5MjY2MDEyNjZlZDJjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MCf4Ss_cscsQpo3XNLiOsJ3GYOydmS8cMXWxEhpOxTE",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-U`, options)
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={ArrowIcon}
        alt="video arrow icon"
        onClick={() => {
          navigate("/");
        }}
      />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
