import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Connecting People Across Faiths & Interests
      </h1>

      {/* Short Description */}
      <p className="text-lg text-gray-600 mb-6 max-w-2xl">
        Join a thriving community where spirituality, knowledge, and shared 
        experiences bring people together. Explore engaging events, connect 
        with like-minded individuals, and be part of something meaningful.
      </p>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <img src="/image1.jpg" alt="Community Gathering" className="w-72 h-80 rounded-3xl object-cover shadow-lg" />
        <img src="/image2.jpg" alt="Spiritual Event" className="w-72 h-80 rounded-3xl object-cover shadow-lg" />
        <img src="/image3.jpg" alt="People Connecting" className="w-72 h-80 rounded-3xl object-cover shadow-lg" />
      </div>

      {/* Call-to-Action Button */}
      <button
        onClick={() => navigate("/events")}
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all"
      >
        Explore Events →
      </button>

      {/* Why Communion Rocks! */}
      {/* Why Communion Rocks! */}
      <div className="features-section">
        <div className="feature-card">
          <img src="/unifying.jpg" alt="Unifying Communities" />
          <h3>Unifying Communities</h3>
          <p>Bridging diverse religious communities to create meaningful connections.</p>
        </div>

        <div className="feature-card">
          <img src="/fun.jpeg" alt="Innovative & Fun" />
          <h3>Innovative & Fun</h3>
          <p>Experience faith in a fresh, modern, and engaging way.</p>
        </div>

        <div className="feature-card">
          <img src="/unity.jpg" alt="Promoting Unity" />
          <h3>Promoting Unity</h3>
          <p>Encouraging understanding and harmony through shared experiences.</p>
        </div>
      </div>
</div>

  );
};

export default Home;
