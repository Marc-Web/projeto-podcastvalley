import moment from "moment";
import React from "react";

class LastReleases extends React.Component {
  renderTwoLastEpisodes() {
    const podcasts = this.props.podcasts;
    moment.locale('pt-br');
    
    return podcasts.episodes.map((episode) => {
      const { id, thumbnail, title, members, published_at, file } = episode;
      return (
          <tr key={id}>
            <td><img src={thumbnail} alt={id} width={50} /> <span>{title}</span></td>
            <td>{members}</td>
            <td><p>{moment(published_at).format('D MMM YY')}</p></td>
            <td><p>{file.duration}</p></td>
          </tr>
      )
  }).slice(0, 2);
  }

  render() {
    return (
      <div>
        <h2>Últimos lançamentos!!!</h2>
        {this.renderTwoLastEpisodes()}
      </div>
    )
  }
}

export default LastReleases;
