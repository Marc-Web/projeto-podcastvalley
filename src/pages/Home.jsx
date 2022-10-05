import React from "react";
import EpisodeList from "../components/EpisodeList";
import Header from "../components/Header";
import LastReleases from "../components/LastReleases";
import Player from "../components/Player";

class Home extends React.Component {
  render() {
    const podcasts = this.props.podcasts;
    return (
      <div>
        <Header />
        <LastReleases />
        <EpisodeList podcasts={podcasts} />
        <Player podcasts={podcasts} />
      </div>
    )
  }
}

export default Home;
