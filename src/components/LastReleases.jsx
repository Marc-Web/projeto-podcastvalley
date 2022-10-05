import moment from "moment";
import React from "react";
import "../css/lastReleases-style.css";

class LastReleases extends React.Component {
  renderTwoLastEpisodes() {
    const podcasts = this.props.podcasts;
    moment.locale('pt-br');
    
    return podcasts.episodes.map((episode) => {
      const { id, thumbnail, title, members, published_at } = episode;
      return (
          <div>
            <img src={thumbnail} alt={id} width={50} />
            <span>{title}</span>
            <p>{members}</p>
            <p>{moment(published_at).format('D MMM YY')}</p>
          </div>
      )
  }).slice(0, 2);
  }

  render() {
    return (
      <div className="box-releases">
        <div className="title">
          <h2>Últimos lançamentos!!!</h2>
        </div>
        <div className="div-last-releases">
          {this.renderTwoLastEpisodes()}
        </div>
      </div>
    )
  }
}

export default LastReleases;
