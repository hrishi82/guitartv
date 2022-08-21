import { Link, useNavigate } from "react-router-dom";
import "./suggestioncard.css";
import { useState } from "react";
import { useData } from "../../../../context/dataContext";
import { useAuth } from "../../../../context/authContext";

export const SuggestionCard = ({ data }) => {
  const navigate = useNavigate();

  const { addVideosToHistory } = useData();
  const { token } = useAuth();

  const { id, _id, title, creator, views, category, src, thumbnail } = data;

  const redirectToVideo = () => {
    addVideosToHistory(data);
    navigate(`/SingleVideoPage/${_id}`);
  };

  return (
    <div className="suggestion-card-product-card " onClick={redirectToVideo}>
        <div className="suggestion-card-container">

        
      <div className="suggestion-card-product-card-img-box" >
        <img
          src={
            thumbnail
              ? thumbnail
              : "https://res.cloudinary.com/dac2rwutk/image/upload/v1649183491/thumbnail_dnbn5i.jpg"
          }
          alt="video"
          className="img-responsive"
        />
      </div>

      <section className="suggestionCard-video-card-body">
        <section className="suggestionCard-video-card-body-content">
          <h5 className="suggestionCard-video-card-title">{title}</h5>
          <p className="suggestionCard-video-card-subtitle">{creator}</p>
        </section>
      </section>
      </div>
    </div>
  );
};
