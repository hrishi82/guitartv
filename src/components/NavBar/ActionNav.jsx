import "./actionnav.css";
import { useData } from "../../context/dataContext";

export const ActionNav = () => {
  const { state, dispatch } = useData();

  const clickHandler = (el, activeGenre) => {
    activeGenre
      ? dispatch({ type: "DELETE_GENRES", payload: el })
      : dispatch({ type: "SET_GENRES", payload: el });
  };

  return (
    <div className="actionnav-main-container">
      <div className="actionnav-section-wrapper-left">
        <button
          className="btn btn-secondary actionNav-explore-all-btn"
          onClick={() => dispatch({ type: "RESET_FILTERS" })}
        >
          {" "}
          EXPLORE ALL
        </button>
      </div>
      <div className="actionnav-section-wrapper-right">
        {state.allGenres.map((el) => {
          let activeGenre = state.filters.genres.includes(el);

          return (
            <div
              className={`actionnav-filterchip-wrapper ${
                activeGenre ? "filterchip-wrapper-active" : null
              }`}
              onClick={() => clickHandler(el, activeGenre)}
              key={el}
            >
              <span className="filterchip-name">{el}</span>
              {/* <i className="fas fa-times"></i> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
