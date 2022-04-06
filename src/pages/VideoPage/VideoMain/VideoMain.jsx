
import {useData} from "../../../context/dataContext"
import { VideoCard } from "../VideoCard/VideoCard";

const VideoMain = () => {
    const {state} = useData()
    const {videoData} = state
  
  return (
    <section className="products-container">
      <h3 className="products-container-info-text">Showing {videoData.length} videos </h3>
      <div className="products-container-content">
        {videoData.map((el) => {
          return (
            <>
              <VideoCard key={el._id} data={el}/>
            </>
          );
        })}
      </div>
    </section>
  );
};

export { VideoMain };
