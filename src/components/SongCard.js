import React from 'react';
import { connect } from 'react-redux';
import SongDelete from '../containers/SongDelete';
import EditButton from './EditButton';


class SongCard extends React.Component { 

  
  render() {
  return ( 
      
    
  <div className = "songtab">
     
    <div className = "song-card">
       
    
            
    <div className="song-card-title">
      <h2><i>{this.props.song.name}</i> by {this.props.song.artist}</h2> 
    </div>
    
    <div className="song-card-lyrics">
      <h4>{this.props.song.lyrics}</h4>
    </div>

    
      <SongDelete/> <EditButton/>
    

   
       </div>
      
  </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    song: state.song,
    songs: state.songs
  };
}



export default SongCard;
