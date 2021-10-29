import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-container">
      <Link to="/home" className="landing-link link">
        INGRESAR
      </Link>
    </div>
  );
};

export default Landing;
