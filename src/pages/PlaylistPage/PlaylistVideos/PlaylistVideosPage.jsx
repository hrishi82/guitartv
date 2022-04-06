import "../../VideoPage/videopage.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { AsideBar } from "../../../components";
import { useData } from "../../../context/dataContext";
import { PlaylistVideoCard } from "./PlaylistVideoCard/PlaylistVideoCard";

export const PlaylistVideosPage = () => {
  const { state } = useData();
  const { playlistID } = useParams();

  const playlistData = state.playlists?.find((el) => el._id === playlistID);

  return (
    <>
      <AsideBar />
      <section className="products-container">
        <h3 className="products-container-info-text">
          Showing { playlistData?.videos?.length} videos from " {playlistData.title} "
        </h3>
        <div className="products-container-content">
          {playlistData?.videos?.length>0 && playlistData?.videos?.map((el) => {
            return (
              <>
                <PlaylistVideoCard key={el._id} data={el} playlistID={playlistID}/>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
