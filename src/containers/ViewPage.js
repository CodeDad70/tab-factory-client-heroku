import React from 'react';
import { connect } from 'react-redux';
import { currentSong } from '../actions/song';
import SongCard from '../components/SongCard';

class ViewPage extends React.Component {

  render() {
    this.props.currentSong(this.props.song);

    return (
      <div className='songtab'>
        <SongCard song={this.props.song}/>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    song: state.song,
    songs: state.songs
  };
};

export default connect(mapStateToProps, {currentSong})(ViewPage);
