import "./singlevideopage.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PlaylistModal } from "../Modal/Modal";
import { useData } from "../../../context/dataContext";
import { useAuth } from "../../../context/authContext";
import { setLikedVideos, deleteLikedVideos } from "../../../services/services";
import { SuggestionCard } from "./SuggestionCard/SuggestionCard";

export const SingleVideoPage = () => {
  const [liked, setLiked] = useState(false);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const { state, dispatch, viewModal, setViewModal } = useData();
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

  useEffect(() => {
    let videoArr = state.videoData.filter((eachVideo) => {
      let found = eachVideo.videoTags.some((tag) =>
        videoData.videoTags.includes(tag)
      );

      return found ? eachVideo : null;
    });

    let cleanedArr = videoArr.filter((el) => el._id !== videoData._id);

    setSuggestedVideos(cleanedArr);
  }, [videoData, state]);

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
      {viewModal && <PlaylistModal />}

      {/* Main Video Page */}
      <div className={"singleVideo-page-container"}>
        <div className="singleVideo-page-container-left">
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
                <li
                  className={`list-item video-options ${
                    liked && "video-options-active"
                  }`}
                  onClick={likeHandler}
                >
                  <i
                    className={`${
                      liked ? "fas fa-thumbs-up" : "far fa-thumbs-up"
                    }  video-reaction-button`}
                  ></i>
                  <span>{liked ? "LIKED" : "LIKE"}</span>
                </li>

                <li
                  className="list-item video-options"
                  onClick={() => {
                    setViewModal(true);
                    dispatch({
                      type: "SET_VIDEO_DATA_FOR_PLAYLIST",
                      payload: videoData,
                    });
                  }}
                >
                  <i className="fa-regular fa-floppy-disk video-reaction-button"></i>
                  <span>SAVE</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="video-details-cont">
            <div className="video-creator-main-wrapper">
              <div className="video-details-left-avatar-container">
                <img src={videoData?.creatorAvatarUrl ? videoData?.creatorAvatarUrl: "https://res.cloudinary.com/dac2rwutk/image/upload/v1660390827/user_xotqed.png"} className="avatar avatar-size-sm" alt="creator-avatar" />
              </div>
              <div className="video-creator-details-container">
              <p className="video-creator-name">{videoData?.creator}</p>
              <p className="video-creator-subscribers">{videoData?.subscribers} subscribers</p>
              <p className="video-creator-videodescription">{videoData?.videoDescription}</p>
              </div>

            </div>
            <div className="video-details-right">
              
            </div>
          </div>

        </div>
        <div className="singleVideo-page-container-right">
          <p className="suggestedVideo-text-heading">Suggested videos:</p>
          {suggestedVideos?.length > 0 ? (
            suggestedVideos.map((el) => <SuggestionCard key={el._id} data={el} />)
          ) : (
            <>No videos to suggest!</>
          )}
        </div>
      </div>
    </>
  );
};
