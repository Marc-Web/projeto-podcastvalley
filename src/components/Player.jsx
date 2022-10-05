import React from "react";
import "../css/player-style.css";

class Player extends React.Component {
  render() {
    return (
      <div className="div-player">
        <p>Tocando agora(Player)</p>
        <p>Selecione um podcast para ouvir</p>
        <audio controls src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/opensource.m4a"></audio>
      </div>
    )
  }
}

export default Player;
