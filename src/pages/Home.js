import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h2>Connecting People Across Faiths & Interests</h2>
      <p>Join events that bring communities together for a greater cause.</p>
      <button onClick={() => navigate("/events")}>Explore Events</button>
    </div>
  );
}

export default Home;
