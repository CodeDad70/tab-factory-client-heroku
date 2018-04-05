import React from 'react';

const Songs=(props) => (
  
  <div>
    <h1> Songs </h1>
    {props.songs.map (song => 
      
     <div key={song.id} className="App-header"  >
        <h3> {song.name} </h3>
      <p> By: {song.artist} </p>
    
  </div>
  )}
  </div>
);


export default Songs;

