import React from "react";
import Header from "./Header";
import "./styles/Body.css";
import { useDataLayerValue } from "./DataLayer";
import SongRow from "./styles/SongRow.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";






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
        <div classname="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>


        
      {discover_weekly?.tracks.items.map((item) => (
        <SongRow track={item.track} />
      ))}

      </div>
    </div>
  );
}

export default Body;
