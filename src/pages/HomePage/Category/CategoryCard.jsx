import {Link, useNavigate} from "react-router-dom"
import "./category.css"
import { useData } from "../../../context/dataContext"


export const CategoryCard = ({data}) =>{

    const {dispatch} = useData()
    const navigate = useNavigate()

    const clickHandler = () =>{
      dispatch({type: "SET_GENRES", payload: data.genre})
      navigate("/allvideos")
    }

    return(
        <div className="collection-card">
        <div className="collection-card-img-box">
          <img src={data.genreCover} alt="category-img" className="img-responsive" />
        </div>
  
        <div className="collection-card-content">
          <p className="collection-card-label">NEW ARRIVALS</p>
          <h3 className="collection-card-title">{data.genre}</h3>
          <p className="collection-card-details">
            {data.genreDescription}
          </p>
          <button
            className="btn pill-btn btn-secondary collection-card-btn"
            onClick={clickHandler}
          >
            Explore
          </button>
        </div>
      </div>
    )
}
