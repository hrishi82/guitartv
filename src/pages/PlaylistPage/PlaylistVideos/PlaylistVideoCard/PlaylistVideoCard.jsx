import {useNavigate} from "react-router-dom"
import "./playlistvideocard.css"
import {useData} from "../../../../context/dataContext"
import {useAuth} from "../../../../context/authContext"


export const PlaylistVideoCard = ({playlistID, data}) =>{

    const navigate = useNavigate()

    const { deleteVideoFromPlaylist} = useData()
    const {token} = useAuth()

    const {
        _id,
        title,
        creator,
        thumbnail,
      } = data;

    const redirectToVideo = () =>{
      navigate(`/SingleVideoPage/${_id}`)
    }

    const deleteVideofromPlaylistHandler = () =>{
        try{
            deleteVideoFromPlaylist({playlistId: playlistID, videoId: _id })
        }catch(err){
            console.log(err)
        }
        
    }

    return (
        <div className="product-card">

        <div className="product-card-img-box" onClick={redirectToVideo}>
          <img
            src={thumbnail ? thumbnail : "https://res.cloudinary.com/dac2rwutk/image/upload/v1649183491/thumbnail_dnbn5i.jpg"}
            alt="video"
            className="img-responsive"
          />
        </div>
  
        <section className="pvc-video-card-body">
          <section className="pvc-video-card-body-content">
            <h5 className="pvc-video-card-title">{title}</h5>
            <p className="pvc-video-card-subtitle">{creator}</p>
          </section>
          <div className="pvc-videocard-option-container relative">
            <div className="pvc-video-card-option-wrapper" onClick={deleteVideofromPlaylistHandler}>
                    <i className="fas fa-trash-alt pvc-trashcan"></i>
            </div>

          </div>



        </section>
      </div>
    )
}
