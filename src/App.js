import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
// import { useStateValue } from "./StateProvider";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
function App() {
  // const [{ token }, dispatch] = useStateValue();
  const [{ token }, dispatch] = useDataLayerValue();

  //run code based on given condition
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";

    let _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        // console.log("👱", user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("7xNcRwYg9ciDftdtLwYGgy").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }

    // console.log("I have a Token >>", token);
  }, [token, dispatch]);

  // console.log("👱", user);
  // console.log("👽", token);

  return (
    //BEM
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
