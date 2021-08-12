import React from "react";
import Header from "./Header";
import "./styles/Body.css";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src="https://newjams-images.scdn.co/v3/discover-weekly/f0K7gUiQEIyspswtQfI-RlqWT5RjBn80cq2Bk_ARgw0wya0mMTTTkCQVrpn_Gx51gT3cdqxAKzeXoW0BKT4YIME7Q3nkGyQ4L8t4uo79OI0hFZ2oqrgvJe39bP0oRql8mKnX-rZlwyI54AhgOeBYG_HWB-VZ-ihsRpx8KKsBfeXlC7YFCWuz5YkRX3UZqrofefcCmuwBAXY6z20iJPn9gE78DliSTDFX_t7-KyO-JAqRhQsK606t5lvzwjhZ7mfyA8FeKd3uJqnoiuePLfvzsqGeIKmWAjTrCHq_5aYx_xiixLNzdgvrMl69GWlyqAkh31hRqjgWig14Hz-8ZY5ofh5YevVs9Sv92fH--3zXEUs=/MTA6ODI6OTBUMzAtNDAtMQ==/default"
          alt=""
        />
        <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>description...</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
