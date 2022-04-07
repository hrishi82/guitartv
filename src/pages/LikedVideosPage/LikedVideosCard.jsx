import {Link, useNavigate} from "react-router-dom"
import "../VideoPage/VideoCard/VideoCard.css"
import {useState} from "react"
import {useData} from "../../context/dataContext"
import {useAuth} from "../../context/authContext"
import {deleteLikedVideos} from "../../services/services"


export const LikedVideosCard = ({data}) =>{
    const [viewOption, setViewOption] = useState(false)

    const navigate = useNavigate()

    const {state,dispatch, addVideosToHistory} = useData()
    const {token} = useAuth()

    const {
        id,
        _id,
        title,
        creator,
        thumbnail,
      } = data;

    const showOptionFunc = () =>{
        setViewOption(!viewOption)
    }

    const redirectToVideo = () =>{
      addVideosToHistory(data)
      navigate(`/SingleVideoPage/${_id}`)

    }

    const deleteVideoHandler = async () => {
        try {
          if (!token) {
            navigate("/loginpage");
            return;
          }

          const findVid = state?.likedVideos?.find(el=> el._id === _id)

          let response = null;
          
          if(findVid){
            response = await deleteLikedVideos({
                encodedToken: token,
                videoId: _id,
              });
          }
    
          if (response.status === 200 || response.status === 201) {
            dispatch({ type: "SET_LIKED_VIDEOS", payload: response.data.likes });
          }
        } catch (err) {
          console.log(err);
        }
      };



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
          <div className="videocard-option-container relative" onClick={showOptionFunc}>
            <i className="fas fa-ellipsis-v" ></i>

            {viewOption && 
            <>
                <div className="video-card-option-wrapper">
                <p className="video-card-options" onClick={deleteVideoHandler}>Delete video from Liked Videos</p>
            </div>
            </>}

          </div>



        </section>
      </div>
    )
}
