import moment from 'moment';
import React from 'react';

class Episode extends React.Component {
  renderEpisodeItems() {
    const podcasts = this.props.podcasts;
    moment.locale('pt-br');
    
    return podcasts.episodes.map((episode) => {
      const { id, thumbnail, title, members, published_at, file } = episode;
      return (
          <tr key={id}>
            <td><img src={thumbnail} alt={id} width={70} /> <span>{title}</span></td>
            <td>{members}</td>
            <td><p>{moment(published_at).format('D MMM YY')}</p></td>
            <td><p>{file.duration}</p></td>
          </tr>
      )
  })
  }

  render () {
    return (
      <>
        {this.renderEpisodeItems()}
      </>
    );
  }
};

export default Episode;
