export const dataReducerFn = (state, action) => {
  switch (action.type) {
    case "GET_ALL_VIDEO_DATA": {
      const genres = action.payload.reduce(
        (acc, curr) => (acc.includes(curr.genre) ? acc : [...acc, curr.genre]),
        []
      );

      return { ...state, videoData: action.payload, allGenres: genres };
    }

    case "SET_LIKED_VIDEOS": {
      return { ...state, likedVideos: action.payload };
    }

    case "SET_PLAYLIST_VIDEOS": {
      return { ...state, playlists: action.payload };
    }

    case "SET_WATCHLATER_VIDEOS": {
      return { ...state, watchLater: action.payload };
    }
    case "SET_HISTORY": {
      return { ...state, history: action.payload };
    }
    case "SET_GENRES":
      {
        let res = state.filters.genres.includes(action.payload);

        if (!res) {
          return {
            ...state,
            filters: {
              ...state.filters,
              genres: state.filters.genres.concat(action.payload),
            },
          };
        }else{
            return state
        }
      }
    case "DELETE_GENRES":
      {
        let res = state.filters.genres.includes(action.payload);

        if (res) {
          return {
            ...state,
            filters: {
              ...state.filters,
              genres: state.filters.genres.filter(
                (el) => el !== action.payload
              ),
            },
          };
        }else{
            return state
        }
      }
    case "RESET_FILTERS":
      {
        return { ...state, filters: {
            genres: [],
            search: "",
            tags: []
          } };
      }

    default:
      return state;
  }
};
