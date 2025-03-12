import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="intro">
        Welcome to Faith Connect, a platform dedicated to 
        bringing people together through shared values, spirituality, and meaningful experiences.
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our goal is to create a welcoming space where individuals from 
          different faiths, cultures, and backgrounds can unite. We aim 
          to foster a sense of community by providing opportunities to 
          engage in discussions, attend spiritual events, and support 
          social causes.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>💬 Thought-provoking discussions on spirituality and faith</li>
          <li>📅 Interactive events, workshops, and charity drives</li>
          <li>🤝 A supportive and inclusive community</li>
          <li>🎉 Opportunities to connect with like-minded individuals</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Join Our Community</h2>
        <p>
          Whether you’re looking for spiritual guidance, a space to share 
          your beliefs, or simply a way to connect with others, 
           Faith Connect is here for you.
        </p>
        <button className="join-btn">Get Involved</button>
      </div>
    </div>
  );
};

export default About;
