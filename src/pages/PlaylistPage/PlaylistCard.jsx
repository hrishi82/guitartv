import { Link, useNavigate } from "react-router-dom";
import "../VideoPage/VideoCard/VideoCard.css";
import "./playlist.css";
import { useState } from "react";
import { useData } from "../../context/dataContext";
import { useAuth } from "../../context/authContext";
import { deletePlaylistService } from "../../services/services";

export const PlaylistCard = ({ data }) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { state, dispatch } = useData();

  const { title, _id, videos } = data;

  const playlistDelete = async () => {
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const playlistId = _id;
      const response = await deletePlaylistService({
        playlistId,
        encodedToken: token,
      });
      if (response.status === 201 || response.status === 200) {
        dispatch({
          type: "SET_PLAYLIST_VIDEOS",
          payload: response.data.playlists,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="product-card">
      <div className="product-card-img-box">
        <img
          src="https://res.cloudinary.com/dac2rwutk/image/upload/v1649176848/playlist_s36y99.jpg"
          alt="video"
          className="img-responsive"
        />
      </div>

      <section className="video-card-body playlist-card-body">
        <section className="video-card-body-content">
          <h5 className="video-card-title">{title}</h5>
          <p className="video-card-subtitle">{videos.length} {videos.length>1 ? "videos": "video"}</p>
        </section>
        <div className="videocard-option-container" onClick={playlistDelete}>
          <i className="fas fa-trash-alt playlistcard-trashcan"></i>
        </div>
      </section>
    </div>
  );
};
