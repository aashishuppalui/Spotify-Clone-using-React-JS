// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  //   token: null,
  //Remove after finished developing...
  //   token:
  // "BQCsfcwTqnzdNO5_JmdH8phiWLelJSj6bhpWhZDngkICdAtP5MVr7_ACBJ-EOTY0gThp6icCoHZ417xvRu3N9AvG4Y5kvkoATmcjvGv5wunJTtnJ1wc2ug2KnUw7ShDAhhEiiuhSkoiZuQwp7pKqnGizbpsOI0c_Gx-q7Hv2HSZCKPXU8ele",
};

const reducer = (state, action) => {
  console.log(action);

  //Action---> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
