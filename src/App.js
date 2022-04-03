import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, AllVideos, SingleVideoPage, LikedVideosPage, LoginPage, ErrorPg } from "./pages";
import { NavBar} from "./components";
import {ProtectedRoute} from "./Routes/ProtectedRoute"

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
    <div className="App relative">
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mockman" element={<MockAPI />} />
          <Route path="/allvideos" element={<AllVideos />} />
          <Route path="/SingleVideoPage/:videoID" element={<SingleVideoPage />} />
          <Route path="/likedvideospage" element={<ProtectedRoute><LikedVideosPage /></ProtectedRoute>} />

          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="*" element={<ErrorPg />} />
        </Routes>
    </div>
  );
}

export default App;
