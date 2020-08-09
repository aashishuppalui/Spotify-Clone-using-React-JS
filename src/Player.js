import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
function Player({ spotify }) {
  return (
    <div className="player">
      {/* <h1>Welcome to spotify</h1> */}
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
        {/* <Sidebar /> */}
        {/* <Body /> */}
      </div>

      <Footer />
      {/* <Footer /> */}
    </div>
  );
}

export default Player;
