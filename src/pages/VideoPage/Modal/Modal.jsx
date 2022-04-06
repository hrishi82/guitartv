import "./modal.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../context/dataContext";
import { useAuth } from "../../../context/authContext";
import {createNewPlaylistService, addVideoToPlaylistService, deleteVideoInPlaylistService} from "../../../services/services"

export const PlaylistModal = ({ setViewOption, videoData }) => {
    const {token} = useAuth()
    const {state, dispatch, addVideoToPlaylist, deleteVideoFromPlaylist} = useData()
    const navigate = useNavigate()
    const [viewInputField, setViewInputField] = useState(false);
    const [playlistName, setPlaylistName] = useState("")

  function modalClose() {
    setViewOption(false);
    setViewInputField(false);
  }

  const newPlaylistHandler = async () =>{

      try{
        if (!token){
            navigate("/loginpage")
            return
        }
        
        const playlist =  {title: playlistName}
        const response = await createNewPlaylistService({encodedToken: token, playlist} );
        if(response.status === 200 || response.status === 201){
            dispatch({type: "SET_PLAYLIST_VIDEOS", payload: response.data.playlists})
        }
        setViewInputField(false)
        setPlaylistName("")

        }catch(err){
            console.log(err)
        }
  }


const videoInPlaylistHandler = (e, playlistData) =>{
    if (!e.target.checked) {
        deleteVideoFromPlaylist({
        playlistId: playlistData._id,
        videoId: videoData._id,
        });
    } else {
        addVideoToPlaylist({ playlistId: playlistData._id, video: videoData });
    }
}


  const ListItem = ({playlistData}) =>{

    const findVideoinPlaylist = playlistData.videos.some(eachVid=>eachVid._id === videoData._id)
      return (
        <div className="li-modal-playlist-cont">
        <input type="checkbox" name="playlist" onChange={(e)=>videoInPlaylistHandler(e, playlistData)} checked={findVideoinPlaylist}/>
        <label
          htmlFor="playlist"
          className="li-modal-playlist-name"
        >
          {playlistData.title}
        </label>
      </div>
      )
  }

  return (
    <div className="modal">
      <div className="modal-header">
        <h4 className="modal-title">Save to...</h4>
        <p className="modal-cross-btn" onClick={modalClose}>
          <i className="fas fa-times"></i>
        </p>
      </div>

      <div className="modal-mid-container">
        {state.playlists.length === 0 && <p>No Playlist found!</p>}
        {state.playlists.length > 0 && state.playlists.map((el)=><ListItem key={el._id} playlistData={el}/> )}
      </div>

      <div className="modal-footer">
        {viewInputField && (
          <div className="newplaylist-form-wrapper">
            <input
              type="text"
              className="newplaylist-name"
              placeholder="playlist name..."
              value={playlistName}
              onChange = {(e)=>setPlaylistName(e.target.value)}
            />
            <p className="newplaylist-create-btn text-right" onClick={newPlaylistHandler}>CREATE</p>
          </div>
        )}

        {!viewInputField && (
          <div
            className="newplaylist-container"
            onClick={() =>{ 
                if (!token){
                    navigate("/loginpage")
                    return
                }
                setViewInputField(!viewInputField)}}
          >
            <p className="newplaylist-plus">+</p>
            <p className="newplaylist-title">Create new playlist</p>
          </div>
        )}

        <button onClick={()=>console.log(state.playlists)}>check</button>
      </div>
    </div>
  );
};