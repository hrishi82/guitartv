import { HistoryCard } from "./HistoryCard";
import "./historypage.css"
import { AsideBar } from "../../components/";
import { useData } from "../../context/dataContext";

export const HistoryPage = () => {
  const { state, deleteAllHistory } = useData();

  const deleteAllHistoryHandler = () =>{
    deleteAllHistory()
  }
  return (
    <>
      <AsideBar />
      <section className="products-container">
        <div className="historypage-infoheder-wrapper">
          <h3 className="products-container-info-text">
            Showing {state.history?.length ? state.history?.length: 0}{" "}
            {state.history?.length > 1 ? "videos" : "video"}{" "}
          </h3>
          <button onClick={deleteAllHistoryHandler} className="delete-history-btn">CLEAR HISTORY</button>
        </div>

        <div className="products-container-content">
          {state.history?.map((el) => {
            return (
              <>
                <HistoryCard key={el._id} data={el} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
