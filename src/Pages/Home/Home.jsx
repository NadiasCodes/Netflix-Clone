import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import HeroBanner from "../../assets/hero_banner.jpg";
import HeroTtitle from "../../assets/hero_title.png";
import PlayIcon from "../../assets/play_icon.png";
import InfoIcon from "../../assets/info_icon.png";
import MainCards from "../../Components/MainCards/MainCards";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={HeroBanner} alt="hero banner" className="hero-banner-img" />
        <div className="hero-caption">
          <img src={HeroTtitle} alt="hero title" className="hero-caption-img" />
          <p>Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.</p>
          <div className="hero-buttons">
            <button className="btn">
              <img src={PlayIcon} alt="play button icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={InfoIcon} alt="info button icon" /> More Info
            </button>
          </div>
          <MainCards />
        </div>
      </div>
      <div className="more-cards">
        <MainCards title={"Upcoming"} category={"upcoming"} />
        <MainCards title={"Top rated"} category={"top_rated"} />
        <MainCards title={"Trending Now"} category={"popular"} />
        <MainCards title={"We Think You'll Love These"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
