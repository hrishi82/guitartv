import "./singlevideopage.css"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import {useData} from "../../../context/dataContext"
import {useAuth} from "../../../context/authContext"
import {setLikedVideos , deleteLikedVideos} from "../../../services/services"

export const SingleVideoPage = () =>{

    const [liked, setLiked] = useState(false)
    const {state, dispatch} = useData()
    const {token} = useAuth()
    const navigate = useNavigate()

    const {videoID} = useParams()
    const videoData = state.videoData?.find(el=>(el._id === videoID))


    const likeHandler = async () =>{

        try{
            if (!token){
            navigate("/loginpage")
            return
            }

            let videoInLikeList = state.likedVideos.find(el=> el._id === videoID)
            let response = null;

            if (!videoInLikeList){
                response = await setLikedVideos({encodedToken: token, video: {...videoData}})
                setLiked(true)
            }else{
                console.log("in else")
                response = await deleteLikedVideos({encodedToken: token, videoId: videoID})
                setLiked(false)
            }

            if (response.status===200 || response.status===201){
                dispatch({type: "SET_LIKED_VIDEOS", payload: response.data.likes})
            }

        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="singleVideo-page-container"> 
 
            <div className="videoPlayer-cont">
                <iframe
                    width='100%'
                    height='100%'
                    src={videoData?.src}
                    title='YouTube video player'
                    frameBorder='0'
                    style={{ objectFit: "cover" }}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen={true}
                ></iframe>
            </div>

            <div className="video-details-cont">
                <div className="video-details-left">
                    <p className="video-title">{videoData?.title}</p>
                    <p className="video-secondary-text">{videoData?.views} views</p>
                </div>
                <div className="video-details-right">
                <ul className="list-wrapper">
                    <li className='list-item video-options' onClick={likeHandler}><i className={`${liked ? "fas fa-thumbs-up": "far fa-thumbs-up"}  video-reaction-button`}></i></li>

                    <li className='list-item video-options' onClick={()=> console.log(state.likedVideos)}><i className="fas fa-save video-reaction-button"></i></li>
                </ul>
                </div>
            </div>

        </div>
    )

}
