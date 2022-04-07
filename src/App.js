import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, AllVideos, SingleVideoPage, LikedVideosPage, AllPlaylists, PlaylistVideosPage, WatchlaterPage, HistoryPage, LoginPage, ErrorPg } from "./pages";
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
          <Route path="/allplaylistpage" element={<ProtectedRoute><AllPlaylists /></ProtectedRoute>} />
          <Route path="/allplaylistpage/:playlistID" element={<ProtectedRoute><PlaylistVideosPage /></ProtectedRoute>} />
          <Route path="/watchlaterpage" element={<ProtectedRoute><WatchlaterPage /></ProtectedRoute>} />
          <Route path="/historypage" element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} />

          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="*" element={<ErrorPg />} />
        </Routes>
    </div>
  );
}

export default App;
