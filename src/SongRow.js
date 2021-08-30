import React from "react";

function SongRow({ track = "test" }) {
  return (
    <div className="songRow">
      <img src="" alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>{track.artist.map((artist) => artist.name)}</p>
        {track.album.name}
      </div>
    </div>
  );
}

export default SongRow;
