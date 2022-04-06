import "./singlevideopage.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {PlaylistModal} from "../Modal/Modal"
import { useData } from "../../../context/dataContext";
import { useAuth } from "../../../context/authContext";
import { setLikedVideos, deleteLikedVideos } from "../../../services/services";

export const SingleVideoPage = () => {
  const [liked, setLiked] = useState(false);
  const [viewOption, setViewOption] = useState(false);
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();

  const { videoID } = useParams();
  const videoData = state.videoData?.find((el) => el._id === videoID);

  useEffect(() => {
    let videoInLikeList = state.likedVideos.find((el) => el._id === videoID);
    if (videoInLikeList) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [state.likedVideos, videoID]);

  const likeHandler = async () => {
    try {
      if (!token) {
        navigate("/loginpage");
        return;
      }

      let response = null;
      if (!liked) {
        response = await setLikedVideos({
          encodedToken: token,
          video: { ...videoData },
        });
      } else {
        response = await deleteLikedVideos({
          encodedToken: token,
          videoId: videoID,
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
    <>
     
    {viewOption && <PlaylistModal setViewOption={setViewOption} videoData={videoData}/>}

      {/* Main Video Page */}
      <div className={`singleVideo-page-container ${viewOption && "blur-bg"}`}>
        <div className="videoPlayer-cont">
          <iframe
            width="100%"
            height="100%"
            src={videoData?.src}
            title="YouTube video player"
            frameBorder="0"
            style={{ objectFit: "cover" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
              <li className="list-item video-options" onClick={likeHandler}>
                <i
                  className={`${
                    liked ? "fas fa-thumbs-up" : "far fa-thumbs-up"
                  }  video-reaction-button`}
                ></i>
              </li>

              <li
                className="list-item video-options"
                onClick={() => {
                  setViewOption(true);
                }}
              >
                <i className="fas fa-save video-reaction-button"> </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
