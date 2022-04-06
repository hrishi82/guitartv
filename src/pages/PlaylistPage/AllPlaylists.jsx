import "../VideoPage/videopage.css";
import { PlaylistCard } from "../PlaylistPage/PlaylistCard";
import { AsideBar } from "../../components";
import { useData } from "../../context/dataContext";

export const NoPlaylists = () => <h1>No Playlists!</h1>;

export const AllPlaylists = () => {
  const { state } = useData();
  return (
    <>
      <AsideBar />
      <section className="products-container">
        <h3 className="products-container-info-text">
          Showing {state.playlists.length}{" "}
          {state.playlists.length > 1 ? "playlists" : "playlist"}{" "}
        </h3>
        <div className="products-container-content">
          {state.playlists.map((el) => {
            return (
              <>
                <PlaylistCard key={el._id} data={el} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
