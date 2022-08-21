
import {useData} from "../../../context/dataContext"
import { useFilterHook } from "../../../hooks/useFilterHook";
import { VideoCard } from "../VideoCard/VideoCard";
import {PlaylistModal} from "../Modal/Modal"

const VideoMain = () => {
    const {state, viewModal} = useData()

    const {filteredData} = useFilterHook()
  
  return (
    <>
     {viewModal && <PlaylistModal />}
  
    <section className="products-container mainpage-allvideos-container">
      <h3 className="products-container-info-text">Showing {filteredData.length} videos </h3>
      <div className="products-container-content">
        {filteredData.map((el) => {
          return (
              <VideoCard key={el._id} data={el}/>
          );
        })}
      </div>
    </section>
    </>
  );
};

export { VideoMain };
