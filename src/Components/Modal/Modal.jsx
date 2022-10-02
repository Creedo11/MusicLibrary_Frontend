import React, { useState } from 'react';
import "./Modal.css";


const Modal = ({closeModal}) => {

const [title, setTitle] = useState('')
const [artist, setArtist] = useState('')
const [album, setAlbum] = useState('')
const [genre, setGenre] = useState('')
const [releaseDate, setReleaseDate] = useState('')

    return ( 
        <div className="modal">
            <div className="modal-container">
                <h2 className="modal-title">Edit Song</h2>
                <div className="title-CloseBtn">
                    <button onClick={()=> closeModal(false)}> X </button>
                </div>
                <form className="body">
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
        </div>
    );
}

     
    export default Modal;