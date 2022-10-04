import React from "react";

class EpisodeList extends React.Component {
  render() {
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
          {}
        </tbody>
      </table>
      </div>
    )
  }
}

export default EpisodeList;
