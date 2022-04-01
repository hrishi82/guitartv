import {Link} from "react-router-dom"
export const CategoryCard = () =>{
    return(
        <div className="collection-card">
        <div className="collection-card-img-box">
          <img src="https://res.cloudinary.com/dac2rwutk/image/upload/v1648820434/taylor-hernandez-JMvgllFBMhk-unsplash_widzcs.jpg" alt="category-img" className="img-responsive" />
        </div>
  
        <div className="collection-card-content">
          <p className="collection-card-label">NEW ARRIVALS</p>
          <h3 className="collection-card-title">Rock</h3>
          <p className="collection-card-details">
            Check out this collection!
          </p>
          <Link
            to="/"
            className="btn pill-btn btn-secondary collection-card-btn"
          >
            Explore
          </Link>
        </div>
      </div>
    )
}
