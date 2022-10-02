import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import CreateSong from './Components/CreateSong/CreateSong';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data)
    setSongs(response.data)
  }

  return (
    <div>
      <SearchBar songs={songs} setSongs={setSongs}getAllSongs={getAllSongs}/>  { /* values passed in here allow access to props in other components */}
      <CreateSong getAllSongs={getAllSongs}/>
      <MusicTable songs={songs} getAllSongs={getAllSongs}/>
    </div>
  );
}

export default App;
