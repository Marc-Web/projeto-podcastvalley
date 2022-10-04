import React from "react";
import Episode from "./Episode";

class EpisodeList extends React.Component {
  render() {
    const podcasts = this.props.podcasts;
    return (
      <div>
        <h2>Todos os Episódios</h2>
        <table>
        <thead>
          <tr>
            <th>PODCAST</th>
            <th>INTEGRANTES</th>
            <th>DATA</th>
            <th>DURAÇÃO</th>
          </tr>
        </thead>
        <tbody>
          {<Episode podcasts={podcasts}/>}
        </tbody>
      </table>
      </div>
    )
  }
}

export default EpisodeList;
