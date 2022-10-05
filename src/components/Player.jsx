import React from "react";
import "../css/player-style.css";
import { FcHeadset } from 'react-icons/fc';

class Player extends React.Component {
  render() {
    return (
      <div className="div-player">
        <p className="text-title"><FcHeadset /> Tocando agora</p>
        <div  className="box-episode">
          <p>Selecione um podcast para ouvir</p>
        </div>
        <audio controls src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/opensource.m4a" className="player-bar"></audio>
      </div>
    )
  }
}

export default Player;
