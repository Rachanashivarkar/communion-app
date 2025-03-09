import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Communion App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
