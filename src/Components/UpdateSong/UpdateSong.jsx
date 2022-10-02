import axios from 'axios';
import React, { useState } from 'react';



const UpdateSong = (props) => {


async function EditSong (selectedSong){
    const response = await axios.put(`http://127.0.0.1:8000/api/music/${props.id}/`, selectedSong)
    console.log(response.data)
    props.getAllSongs()
}

const [title, setTitle] = useState('')
const [artist, setArtist] = useState('')
const [album, setAlbum] = useState('')
const [genre, setGenre] = useState('')
const [releaseDate, setReleaseDate] = useState('')

function handleSubmit(event){
    event.preventDefault(); //keeps page from refreshing on submission
    let selectedSong = {
        title: title,
        artist: artist,
        album: album,
        genre: genre,
        release_date: releaseDate
    };
    EditSong(selectedSong)
}

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={(event)=> setTitle(event.target.value)}/>
                <label>Artist</label>
                <input value={artist} onChange={(event)=> setArtist(event.target.value)}/>
                <label>Album</label>
                <input value={album} onChange={(event)=> setAlbum(event.target.value)}/>
                <label>Genre</label>
                <input value={genre} onChange={(event)=> setGenre(event.target.value)}/>
                <label>Release Date</label>
                <input type="date" value={releaseDate} onChange={(event)=> setReleaseDate(event.target.value)}/>
                <button type="submit" >SUBMIT</button>
            </form>
        </div>
    );
}
 
export default UpdateSong;