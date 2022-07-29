import "./homepage.css";
import { Genres } from "./Category/Genres.jsx";
import { HeroSection } from "./HeroSection.jsx";

const HomePage = () => {
  return (
    <div className="main-container">
      <div className="section-gutter-reg"></div>
      <HeroSection />
      <div className="section-gutter-lg"></div>
      <Genres />
    </div>
  );
};

export { HomePage };
