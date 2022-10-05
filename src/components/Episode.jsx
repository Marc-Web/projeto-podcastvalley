import moment from 'moment';
import React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import "../css/episode-style.css";

class Episode extends React.Component {
  render () {
    const { id, thumbnail, title, members, published_at, file } = this.props.eachEpisode;
    return (
      <div className='div-episode'>
        <tr key={id}>
            <td className='td-episode'><img src={thumbnail} alt={id} width={50} /> <span>{title}</span></td>
            <td className='td-episode'>{members}</td>
            <td className='td-episode'>{moment(published_at).format('D MMM YY')}</td>
            <td className='td-episode'>{file.duration}</td>
            <button className='episode-button'><BsPlayFill /></button>
          </tr>
      </div>
    );
  }
};

export default Episode;
