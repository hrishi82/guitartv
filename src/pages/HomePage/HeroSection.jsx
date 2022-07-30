import {Link, useNavigate} from "react-router-dom"
import { useData } from "../../context/dataContext"
const HeroSection = () =>{

    const {dispatch} = useData()
    const navigate = useNavigate()

    const clickHandler = () =>{
        dispatch({ type: "RESET_FILTERS" })
        navigate("/allvideos")
    }
    return (
        <section className="hero-container">
        <div className="hero-img-box">
            <img src="https://res.cloudinary.com/dac2rwutk/image/upload/v1648797450/luana-azevedo-OYVaNuVoqVw-unsplash_o47geq.jpg" alt="image" className="img-responsive hero-img" />
        </div>

        <section className="hero-text-container text-center">
            <h2 className="hero-heading-text">stringFever. All Season</h2>
            <p className="hero-para">guitarTV brings you guitar content from all around the globe. Click on explore all to check out our collection</p>
        </section>

        <div className="header-btn-container text-center">
            <button className="btn pill-btn pill-btn-lg btn-secondary" onClick={clickHandler}>Explore All</button>
        </div>
    </section>
    )
}

export {HeroSection}
