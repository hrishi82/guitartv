import "./asidebar.css";
import {Link} from "react-router-dom"

export const AsideBar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list-container">
        <li className="sidebar-li-item">
          <Link to="/allvideos" className="sidebar-links" >
            Home
          </Link>
        </li>
        <li className="sidebar-li-item">
          <Link to="/allplaylistpage" className="sidebar-links" >
            Playlist
          </Link>
        </li>
        <li className="sidebar-li-item">
          <Link to="/likedvideospage" className="sidebar-links">
            Liked Videos
          </Link>
        </li>
        <li className="sidebar-li-item">
          <Link to="/" className="sidebar-links">
            Watch Later
          </Link>
        </li>
        <li className="sidebar-li-item">
          <Link to="/" className="sidebar-links" >
            History
          </Link>
        </li>
      </ul>

    </aside>
  );
};
