import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {loginDetailsFunc, GetLikedVideos, getPlaylists, getHistoryVideosService, getWatchlaterVideosService} from "../../../services/services"
import "../Auth.css"
import {useData} from "../../../context/dataContext"
import {useAuth} from "../../../context/authContext"

const LoginPage = () => {
    const { token, setToken, user, setUser } = useAuth();
    const { state, dispatch } = useData();
    const navigate = useNavigate();
  
    const [loginUser, setLoginUser] = useState({ email: "", password: "" });

 
    const loginHandler = async (e, loginUser, setLoginUser) => {
        e.preventDefault()

        try {
            let response;
            if (e.target.innerText === "Login as Guest"){
                const mail = "adarshbalika@gmail.com";
                const pass = "adarshBalika123";
                setLoginUser({...loginUser, email: mail, password: pass});
                
                response = await loginDetailsFunc(mail, pass);
            }else{
                response = await loginDetailsFunc(loginUser.email, loginUser.password);
            }

            if (response.status===200 || response.status===201){
                localStorage.setItem("login", JSON.stringify({user: response.data.foundUser, token: response.data.encodedToken}))
            }

            const likeResp = await GetLikedVideos({encodedToken: response.data.encodedToken});
            if (likeResp.status===200 || likeResp.status===201){
                dispatch({type: "SET_LIKED_VIDEOS", payload: likeResp.data.likes})
            }

            const playlistResp = await getPlaylists({encodedToken: response.data.encodedToken})
            if (playlistResp.status===200 || playlistResp.status===201){
              dispatch({type: "SET_PLAYLIST_VIDEOS", payload: playlistResp.data.playlists})
          }

            const watchlaterResp = await getWatchlaterVideosService({encodedToken: response.data.encodedToken})
            if (watchlaterResp.status===200 || watchlaterResp.status===201){
              dispatch({type: "SET_WATCHLATER_VIDEOS", payload: watchlaterResp.data.playlists})
          }

            const histResp = await getHistoryVideosService({encodedToken: response.data.encodedToken})
            if (histResp.status===200 || histResp.status===201){
              dispatch({type: "SET_HISTORY", payload: histResp.data.playlists})
          }


            setUser(response.data.foundUser)
            setToken(response.data.encodedToken)
            navigate("/allvideos")

        }catch(err){
            console.log(err)
        }

    }
  
    return (
      <>
        <div className="auth-page-container">
          <div className="auth-content-container">
            <div className="auth-title">
              <h2 className="text-center">Login</h2>
            </div>
  
            <div className="input">
              <label>Email</label>
              <input
                className="input-txt"
                type="email"
                value={loginUser.email}
                onChange={(e) =>
                  setLoginUser({ ...loginUser, email: e.target.value })
                }
              />
            </div>
  
            <div className="input">
              <label>Password</label>
              <input
                className="input-txt"
                type="password"
                value={loginUser.password}
                onChange={(e) =>
                  setLoginUser({ ...loginUser, password: e.target.value })
                }
              />
            </div>
  
            <div className="input input-flex-cont">
              <div className="input-condition-cont">
                <input type="checkbox" className="input-checkbox" />
                <p className="text spacing-sm">Remember Me</p>
              </div>
  
              <Link
                to="/loginpage"
                className="auth-form-forget-pass-alignment auth-page-link"
              >
                Forget your Password?
              </Link>
            </div>
  
            <div className="auth-form-btn-container">
              <button
                className="btn btn-primary auth-form-btn"
                onClick={(e) => loginHandler(e, loginUser, setLoginUser)}
              >
                Login
              </button>
  
              <button
                className="btn btn-secondary auth-form-btn"
                onClick={(e) => loginHandler(e, loginUser, setLoginUser)}
              >
                Login as Guest
              </button>
            </div>
  
            <div className="text-center auth-action-signup-link-cont">
              <Link
                to="/signuppage"
                className="auth-page-link auth-action-signup-link"
              >
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export { LoginPage };
  