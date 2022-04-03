import "./homepage.css";
import { Category } from "./Category/Category.jsx";
import { HeroSection } from "./HeroSection.jsx";

const HomePage = () => {
  return (
    <div className="main-container">
      <div className="section-gutter-reg"></div>
      <HeroSection />
      <div className="section-gutter-lg"></div>
      <Category />
    </div>
  );
};

export { HomePage };
