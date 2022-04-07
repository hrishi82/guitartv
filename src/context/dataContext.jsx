import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { dataReducerFn } from "../reducer/dataReducerFn";
import { GetData } from "../services/services";
import { useAuth } from "../context/authContext";
import {
  addVideoToPlaylistService,
  deleteVideoInPlaylistService,
  getWatchlaterVideosService,
  addVideosToWatchlaterService,
  deleteWatchlaterVideoService,
  getHistoryVideosService,
  addVideosToHistoryService,
  deleteHistoryVideoService,
  deleteAllHistoryService
} from "../services/services";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const initialData = {
    videoData: [],
    allCategories: [],
    likedVideos: [],
    watchLater: [],
    playlists: [],
    history: [],
    filters: {
      categories: [],
      search: "",
    },
  };
  const [state, dispatch] = useReducer(dataReducerFn, initialData);

  useEffect(() => {
    (async () => {
      let response = await GetData();
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "GET_ALL_VIDEO_DATA", payload: response.data.videos });
      }
    })();
  }, [token]);

  const addVideoToPlaylist = async ({ playlistId, video }) => {
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const response = await addVideoToPlaylistService({
        playlistId,
        video,
        encodedToken: token,
      });

      if (response.status === 200 || response.status === 201) {
        let arr = state.playlists.map((item) => {
          if (item._id === response.data.playlist._id) {
            return response.data.playlist;
          }
          return item;
        });
        dispatch({
          type: "SET_PLAYLIST_VIDEOS",
          payload: arr,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteVideoFromPlaylist = async ({ playlistId, videoId }) => {
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const response = await deleteVideoInPlaylistService({
        playlistId,
        videoId,
        encodedToken: token,
      });
      if (response.status === 200 || response.status === 201) {
        let arr = state.playlists.map((item) => {
          if (item._id === response.data.playlist._id) {
            return response.data.playlist;
          }
          return item;
        });
        dispatch({
          type: "SET_PLAYLIST_VIDEOS",
          payload: arr,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getWatchlaterVideos = async () => {
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const response = await getWatchlaterVideosService({
        encodedToken: token,
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "SET_WATCHLATER_VIDEOS",
          payload: response.data.watchlater,
        });
        console.log("watchlater", response.data.watchlater);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addVideosToWatchlater = async (videoData) => {
    try {
      if (!token) {
        navigate("/loginpage");
        return;
      }
      const response = await addVideosToWatchlaterService({
        encodedToken: token,
        video: { ...videoData },
      });

      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "SET_WATCHLATER_VIDEOS", payload: response.data.watchlater });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteVideosFromWatchlater = async (videoData) => {
    try {
      if (!token) {
        navigate("/loginpage");
        return;
      }
      const response = await deleteWatchlaterVideoService({
        encodedToken: token,
        videoId: videoData._id
      });

      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "SET_WATCHLATER_VIDEOS", payload: response.data.watchlater });
      }
    } catch (err) {
      console.log(err);
    }
  };


  const getHistoryVideos = async () => {
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const response = await getHistoryVideosService({
        encodedToken: token,
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "SET_HISTORY",
          payload: response.data.history,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addVideosToHistory = async (videoData) => {
    try {
      if (!token) {
        navigate("/loginpage");
        return;
      }
      const response = await addVideosToHistoryService({
        encodedToken: token,
        video: { ...videoData },
      });

      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "SET_HISTORY", payload: response.data.history });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteVideosFromHistory = async (videoData) => {
    try {
      if (!token) {
        navigate("/loginpage");
        return;
      }
      const response = await deleteHistoryVideoService({
        encodedToken: token,
        videoId: videoData._id
      });

      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "SET_HISTORY", payload: response.data.history });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAllHistory = async () => {
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const response = await deleteAllHistoryService({
        encodedToken: token,
      });
      console.log("from history", response)
      
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "SET_HISTORY",
          payload: response.data.history,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <DataContext.Provider
      value={{ state, dispatch, addVideoToPlaylist, deleteVideoFromPlaylist, addVideosToWatchlater, deleteVideosFromWatchlater, addVideosToHistory, deleteVideosFromHistory, deleteAllHistory }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
