import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import HeroBanner from "../../assets/hero_banner.jpg";
import HeroTtitle from "../../assets/hero_title.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={HeroBanner} alt="hero banner" className="hero-banner-img" />
        <div className="hero-caption">
          <img src={HeroTtitle} alt="hero title" className="hero-caption-img" />
          <p>Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
