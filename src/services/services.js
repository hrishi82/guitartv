import axios from "axios";

export const GetData = async () => await axios.get("/api/videos");

export const loginDetailsFunc = async (email, password) => {
  const resp = await axios.post("/api/auth/login", { email, password });
  return resp;
};

export const GetLikedVideos = async ({ encodedToken }) => {
  const response = await axios.get("/api/user/likes", {
    headers: { authorization: encodedToken },
  });
  return response;
};

export const setLikedVideos = async ({ encodedToken, video }) => {
  const resp = await axios.post(
    "/api/user/likes",
    { video },
    { headers: { authorization: encodedToken } }
  );
  return resp;
};

export const deleteLikedVideos = async ({ videoId, encodedToken }) => {
  const resp = await axios.delete(`/api/user/likes/${videoId}`, {
    headers: { authorization: encodedToken },
  });
  return resp;
};

export const getPlaylists = async ({ encodedToken }) => {
  const resp = await axios.get("/api/user/playlists", {
    headers: { authorization: encodedToken },
  });
  return resp;
};

export const createNewPlaylistService = async ({ encodedToken, playlist }) => {
  const resp = await axios.post(
    "/api/user/playlists",
    {
      playlist,
    },
    { headers: { authorization: encodedToken } }
  );
  return resp;
};

export const deletePlaylistService = async ({ encodedToken, playlistId }) => {
  return axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};



  export const addVideoToPlaylistService = async ({
    playlistId,
    video,
    encodedToken,
  }) => {
    return axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
  };
  
  export const deleteVideoInPlaylistService = async ({
    playlistId,
    videoId,
    encodedToken,
  }) => {
    return axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
  };
