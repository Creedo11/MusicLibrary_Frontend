import React, { useState } from 'react';


const Modal = ({closeModal}) => {

const [title, setTitle] = useState('')
const [artist, setArtist] = useState('')
const [album, setAlbum] = useState('')
const [genre, setGenre] = useState('')
const [releaseDate, setReleaseDate] = useState('')

    return ( 
        <div className="modal-background">
            <button onClick={()=> closeModal(false)}> X </button>
            <form>
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
            </form>
        </div>
    );
}

     
    export default Modal;