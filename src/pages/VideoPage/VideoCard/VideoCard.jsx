import {Link, useNavigate} from "react-router-dom"
import "./VideoCard.css"
import {useState} from "react"
import {useData} from "../../../context/dataContext"
import {useAuth} from "../../../context/authContext"



export const VideoCard = ({data}) =>{
    const [viewOption, setViewOption] = useState(false)
    // const [viewModal, setViewModal] = useState(false)
    const [inWatchlist, setInWatchlist] = useState(false)

    const navigate = useNavigate()

    const {state, dispatch, addVideosToWatchlater, deleteVideosFromWatchlater, addVideosToHistory, setViewModal} = useData()
    const {token} = useAuth()

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
      addVideosToHistory(data)
      navigate(`/SingleVideoPage/${_id}`)

    }

    

    const watchlaterHandler = () =>{
      
      const findVid = state?.watchLater?.find(el=> el._id === _id)

      if(!findVid){
        addVideosToWatchlater(data)
        setInWatchlist(true)
      }else{
        deleteVideosFromWatchlater(data)
        setInWatchlist(false)
      }

      setViewOption(false)
    }


    return (
        <div className="product-card mainpage-video-card-container">

        {/* {viewModal && <PlaylistModal setViewOption={setViewModal} videoData={data}/>} */}
  
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
                <div className="video-card-option-wrapper video-card-dropdown-option-container">
                <p className="video-card-options" onClick={()=>{
                  setViewModal(true)
                  setViewOption(false)
                  dispatch({type: "SET_VIDEO_DATA_FOR_PLAYLIST", payload: data})
                  }}>Add to playlist</p>
                <p className="video-card-options" onClick={watchlaterHandler}>{inWatchlist ? "Delete from Watchlater":"Add to Watchlater"}</p>
            </div>
            </>}

          </div>



        </section>
      </div>
    )
}
