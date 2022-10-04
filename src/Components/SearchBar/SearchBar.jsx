import React, { useState } from 'react';
import "./SearchBar.css"


const SearchBar = (props) => {

const [searchTerm, setSearchTerm] = useState('')


function searchSongs(event){
    event.preventDefault();
    let response = props.songs.filter((song) =>{
        if(song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.release_date.includes(searchTerm)){
                return true;
            }
            else{
                return false;
            }
    });
    props.setSongs(response)
}

    return ( 
        <form onSubmit={searchSongs}>
            <input className="search_bar" placeholder="Search Songs" type="text" value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)}/>
            <button className="search" type="submit">Search</button>
            <button className="refresh" onClick={props.getAllSongs}>Refresh Table</button>
        </form>
     ); 
}
 
export default SearchBar;