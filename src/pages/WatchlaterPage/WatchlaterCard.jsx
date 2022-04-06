import {useNavigate} from "react-router-dom"
import "../PlaylistPage/playlist.css"
import {useData} from "../../context/dataContext"
import {useAuth} from "../../context/authContext"


export const WatchlaterCard = ({data}) =>{

    const navigate = useNavigate()

    const { deleteVideosFromWatchlater} = useData()
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

    const deleteVideofromWatchlaterHandler = () =>{
        try{
            deleteVideosFromWatchlater(data)
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
  
        <section className="video-card-body">
          <section className="video-card-body-content">
            <h5 className="video-card-title">{title}</h5>
            <p className="video-card-subtitle">{creator}</p>
          </section>
          <div className="videocard-option-container relative">
            <div className="video-card-option-wrapper" onClick={deleteVideofromWatchlaterHandler}>
                    <i className="fas fa-trash-alt playlistcard-trashcan"></i>
            </div>

          </div>



        </section>
      </div>
    )
}
