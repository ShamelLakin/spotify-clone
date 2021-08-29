import React from "react";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import "./styles/Body.css";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Taste</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div classname="body__icons"></div>
        {/* List of Songs */}
      </div>
    </div>
  );
}

export default Body;
