import axios from 'axios';
import React, { useState } from 'react';
import "./UpdateSong.css"


const UpdateSong = (props) => {



// async function EditSong (selectedSong){
//     const response = await axios.put(`http://127.0.0.1:8000/api/music/${props.id}/`, selectedSong)
//     console.log(response.data)
//     props.getAllSongs()
// }

// const [title, setTitle] = useState('')
// const [artist, setArtist] = useState('')
// const [album, setAlbum] = useState('')
// const [genre, setGenre] = useState('')
// const [releaseDate, setReleaseDate] = useState('')

// function handleSunmit(event){
//         event.preventDefault(); //keeps page from refreshing on submission
//         let selectedSong = {
//             title: title,
//             artist: artist,
//             album: album,
//             genre: genre,
//             release_date: releaseDate
//         };
//         EditSong(selectedSong)

        return ( 
            <div className="modal-background">
                Hello World
            </div>
        );
    // }
}
 
export default UpdateSong;