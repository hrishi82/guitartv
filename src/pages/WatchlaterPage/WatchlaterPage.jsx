import "../LikedVideosPage/likedvideospage.css"
import {AsideBar} from "../../components/"
import {useData} from "../../context/dataContext"
import { WatchlaterCard } from "./WatchlaterCard"

export const WatchlaterPage = () =>{
    const {state} = useData()

    return (
        <>
        <AsideBar/>
    <section className="products-container">
      <h3 className="products-container-info-text">Showing {state.watchLater?.length ? state.watchLater?.length: 0} {state.watchLater?.length>1 ? "videos": "video"} </h3>
      <div className="products-container-content">
        {state.watchLater?.map((el) => {
          return (
            <>
              <WatchlaterCard key={el._id} data={el}/>
            </>
          );
        })}
      </div>
    </section>
        </>
    )
}
