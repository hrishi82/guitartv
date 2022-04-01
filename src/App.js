import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { NavBar, AsideBar } from "./components";

import Mockman from "mockman-js";
function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-website-layout-wrapper">
        <AsideBar />
        <div className="main-content-section">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mockman" element={<MockAPI />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
