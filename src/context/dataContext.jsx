import {useContext, createContext, useEffect, useReducer} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {dataReducerFn} from "../reducer/dataReducerFn"
import {GetData} from "../services/services"
import {useAuth} from "../context/authContext"
import {addVideoToPlaylistService, deleteVideoInPlaylistService} from "../services/services"

const DataContext = createContext()

const DataProvider = ({children}) => {

    const {token} = useAuth();
    const navigate = useNavigate()

    const initialData= {
        videoData: [],
        allCategories: [],
        likedVideos: [],
        watchLater: [],
        playlists: [],
        filters:{
            categories:[],
            search: ""
        }
    }
    const [state, dispatch] = useReducer(dataReducerFn, initialData)


    useEffect(()=>{
        (async () =>{
            let response = await GetData()
            if (response.status === 200 || response.status === 201){
                dispatch({type: "GET_ALL_VIDEO_DATA", payload: response.data.videos})
            }
        })()
    }, [token])

    const addVideoToPlaylist = async ({ playlistId, video }) => {
        if (!token) {
          navigate('/login');
          return;
        }
        try {
          const playlistRes = await addVideoToPlaylistService({
            playlistId,
            video,
            encodedToken: token,
          });

          console.log(playlistRes.data.playlist)

          
          if (playlistRes.status === 201 || playlistRes.status === 200)
            dispatch({
              type: "SET_PLAYLIST_VIDEOS",
              payload:  playlistRes.data.playlist,
            });
        } catch (err) {
          console.log(err);
        }
      };
    
      const deleteVideoFromPlaylist = async ({ playlistId, videoId }) => {
        if (!token) {
          navigate('/login');
          return;
        }
        try {
          const response = await deleteVideoInPlaylistService({
            playlistId,
            videoId,
            encodedToken: token,
          });
          if (response.status === 201 || response.status === 200) {
            dispatch({
                type: "SET_PLAYLIST_VIDEOS",
                payload:  response.data.playlists,
              });
          }
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <DataContext.Provider value={{state, dispatch, addVideoToPlaylist, deleteVideoFromPlaylist}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext)


export {useData, DataProvider}
