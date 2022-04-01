import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"




const NavBar = () => {

  return (
    <nav className="nav-wrapper">
      <nav className="nav-items-left">
        <h4 className="nav-title">
          <Link to="/" className="link-no-decor">
            guitarTV
          </Link>
        </h4>
      </nav>

      <nav className="nav-items-center">
        <div className="search-wrapper nav-search-bar">
          <input
            type="text"
            placeholder="Search.."
            name="search-bar"
            className="search-bar"
          />
          <button type="submit" className="search-bar-btn">
            <i className="far fa-search"></i>
          </button>
        </div>
      </nav>

      <nav className="nav-items-right">
      <Link to="/productpage" className="nav-link">
          All Videos
        </Link>

        <Link to="/playlistpage" className="nav-link">
          Playlist
        </Link>

         <Link to="/loginpage" className="nav-link">
          Login
        </Link>
      </nav>
    </nav>
  );
};

export {NavBar}
