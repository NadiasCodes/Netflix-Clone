import React from 'react'
import "./Footer.css"
import InstagramIcon from "../../assets/instagram_icon.png"
import YoutubeIcon from "../../assets/youtube_icon.png"
import TwitterIcon from "../../assets/twitter_icon.png"
import FacebookIcon from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={InstagramIcon} alt="instagram icon" />
        <img src={FacebookIcon} alt=" facebook icon" />
        <img src={TwitterIcon} alt="twitter icon" />
        <img src={YoutubeIcon} alt="youtube icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Investor Relations</li>
        <li>Privacy</li>
        <li>Contact us</li>
        <li>Help Center</li>
        <li>Jobs</li>
        <li>Legal Notices</li>
        <li>Ad Choices</li>
        <li>Gift Cards</li>
        <li>Netflix Shop</li>
        <li>Cookie Preferences</li>
        <li>Media Center</li>
        <li>Terms Of Use</li>
        <li>Impressum</li>
      </ul>
      <p className="copyright">© 1997-2024 Netflix, Inc.</p>
    </div>
  );
}

export default Footer
