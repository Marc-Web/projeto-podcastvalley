import React from "react";
import Episode from "./Episode";
import "../css/episodesList-style.css"

class EpisodeList extends React.Component {
  totalEpisodes() {
    const {episodes}  = this.props.podcasts;
    const total = Object.entries(episodes).length;

    return total;
  }

  render() {
    const podcasts = this.props.podcasts;
    console.log(podcasts.episodes);
    return (
      <div className="episodes-list">
        <div className="div-title">
          <h2>Todos os Episódios</h2>
          <p>{`${this.totalEpisodes()} ao total`}</p>
        </div>
        <table>
          <thead className="table-head">
            <tr>
              <th>PODCAST</th>
              <th>INTEGRANTES</th>
              <th>DATA</th>
              <th>DURAÇÃO</th>
            </tr>
          </thead>
          <tbody>
            {podcasts.episodes.map((episode) => <Episode eachEpisode={episode}/> )}
          </tbody>
      </table>
      </div>
    )
  }
}

export default EpisodeList;
