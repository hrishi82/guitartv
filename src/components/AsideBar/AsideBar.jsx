import "./asidebar.css";
import {NavLink} from "react-router-dom"

export const AsideBar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list-container">
        <li className="sidebar-li-item">
          <NavLink to="/allvideos" className={({ isActive }) =>
              isActive ? "navlink-active" : "sidebar-links"
            } >
            Home
          </NavLink>
        </li>
        <li className="sidebar-li-item">
          <NavLink to="/allplaylistpage" className={({ isActive }) =>
              isActive ? "navlink-active" : "sidebar-links"
            } >
            Playlist
          </NavLink>
        </li>
        <li className="sidebar-li-item">
          <NavLink to="/likedvideospage" className={({ isActive }) =>
              isActive ? "navlink-active" : "sidebar-links"
            }>
            Liked Videos
          </NavLink>
        </li>
        <li className="sidebar-li-item">
          <NavLink to="/watchlaterpage" className={({ isActive }) =>
              isActive ? "navlink-active" : "sidebar-links"
            }>
            Watch Later
          </NavLink>
        </li>
        <li className="sidebar-li-item">
          <NavLink to="/historypage" className={({ isActive }) =>
              isActive ? "navlink-active" : "sidebar-links"
            } >
            History
          </NavLink>
        </li>
      </ul>

    </aside>
  );
};
