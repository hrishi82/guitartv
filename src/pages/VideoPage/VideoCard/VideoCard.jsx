import {Link, useNavigate} from "react-router-dom"
import "./VideoCard.css"
import {useState} from "react"

export const VideoCard = ({data}) =>{
    const [viewOption, setViewOption] = useState(false)

    const navigate = useNavigate()

    const {
        id,
        _id,
        title,
        creator,
        views,
        category,
        src,
        thumbnail,
      } = data;

    const showOptionFunc = () =>{
        setViewOption(!viewOption)
    }

    const redirectToVideo = () =>{
      navigate(`/SingleVideoPage/${_id}`)
    }

    return (
        <div className="product-card" onClick={redirectToVideo}>
  
        <div className="product-card-img-box">
          <img
            src={thumbnail ? thumbnail : "../../../assets/images/noimg.png"}
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
                <p className="video-card-options">Add to playlist</p>
                <p className="video-card-options">Add to Watchlater</p>
            </div>
            </>}

          </div>



        </section>
      </div>
    )
}
