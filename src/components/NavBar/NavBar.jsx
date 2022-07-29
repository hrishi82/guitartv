import { Link, useNavigate, useLocation } from "react-router-dom";
import "./navbar.css"
import {useAuth} from "../../context/authContext"
import {useData} from "../../context/dataContext"
import {ActionNav} from "./ActionNav"
import { useState, useEffect } from "react"

const NavBar = () => {

  const {token, setToken, setUser} = useAuth()
  const {dispatch} = useData()

  const logoutHandler = (e) =>{
    e.preventDefault()
    localStorage.removeItem("login")
    setToken(null)
    setUser(null)
    dispatch({type: "SET_LIKED_VIDEOS", payload: []})
    dispatch({type: "SET_PLAYLIST_VIDEOS", payload: []})
    dispatch({type: "SET_WATCHLATER_VIDEOS", payload: []})
    dispatch({type: "SET_HISTORY", payload: []})
  }

  let location = useLocation();

  const [actionNavActive, setActionNavActive] = useState(false)

  useEffect(()=>{
    if (location.pathname==="/allvideos"){
      setActionNavActive(true)
    }else{
      setActionNavActive(false)
    }
}, [location])


  return (
    <>
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
            <i className="fas fa-search"></i>
          </button>
        </div>
      </nav>

      <nav className="nav-items-right">
      <Link to="/allvideos" className="nav-link">
          ALL VIDEOS
        </Link>

        {token ? <Link to="/loginpage" className="nav-link" onClick={(e)=>logoutHandler(e)}>
          LOGOUT </Link> : 
         <Link to="/loginpage" className="nav-link">
          LOGIN
        </Link>}

      </nav>
      
    </nav>
   {actionNavActive && <ActionNav />}
    </>
  );
};

export {NavBar}
