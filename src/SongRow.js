import React from "react";
import "./SongRow.css";

function SongRow({ track }) {
  return (
    <div className="songRow">
      <img class="songRow_album" src={track.album.images[0].url} alt="" />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artists) => artists.name).join(", ")}</p>
      </div>
    </div>
  );
}

export default SongRow;
