import "./likedvideospage.css"
import {AsideBar} from "../../components"
import {useData} from "../../context/dataContext"
import {VideoCard} from "../VideoPage/VideoCard/VideoCard"

export const LikedVideosPage = () =>{
    const {state} = useData()

    return (
        <>
        <AsideBar/>
    <section className="products-container">
      <h3 className="products-container-info-text">Showing {state.likedVideos.length} videos </h3>
      <div className="products-container-content">
        {state.likedVideos.map((el) => {
          return (
            <>
              <VideoCard key={el._id} data={el}/>
            </>
          );
        })}
      </div>
    </section>
        </>
    )
}
