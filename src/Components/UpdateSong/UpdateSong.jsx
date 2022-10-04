import axios from 'axios';
import React, { useState } from 'react';
import "./UpdateSong.css"



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
                <label className="input_label">Title</label>
                <input className="input_box" value={title} onChange={(event)=> setTitle(event.target.value)}/>
                <label className="input_label">Artist</label>
                <input className="input_box" value={artist} onChange={(event)=> setArtist(event.target.value)}/>
                <label className="input_label">Album</label>
                <input className="input_box" value={album} onChange={(event)=> setAlbum(event.target.value)}/>
                <label className="input_label">Genre</label>
                <input className="input_box" value={genre} onChange={(event)=> setGenre(event.target.value)}/>
                <label className="input_label">Release Date</label>
                <input className="input_box" type="date" value={releaseDate} onChange={(event)=> setReleaseDate(event.target.value)}/>
                <button className="add_song_btn" type="submit" >Add Song</button>
            </form>
        </div>
    );
}
 
export default UpdateSong;