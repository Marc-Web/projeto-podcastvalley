import React from "react";

class Player extends React.Component {
  render() {
    return (
      <div>
        <p>Tocando agora(Player)</p>
        <p>Selecione um podcast para ouvir</p>
        <audio controls src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/opensource.m4a"></audio>
      </div>
    )
  }
}

export default Player;
