import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ background: "#8B5E5E", padding: "10px" }}>
      <Link to="/" style={{ marginRight: "10px", color: "white" }}>Home</Link>
      <Link to="/about" style={{ color: "white" }}>About us</Link>
    </div>
  );
}

export default Navbar;