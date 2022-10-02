import DeleteButton from "../DeleteButton/DeleteButton";
import React, { useState } from 'react';
import Modal from "../Modal/Modal";
import "./MusicTable.css"


const MusicTable = (props) => {

    
    const [openModal, setOpenModal] = useState(false);

    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song)=>{
                        return(
                            <tr key={song.id}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.genre}</td>
                                <td>{song.release_date}</td>
                                <td><DeleteButton id={song.id} getAllSongs={props.getAllSongs}/></td>
                                <td><button className="openModalBtn" onClick={() => {setOpenModal(true)}}>Edit Song</button></td>
                                <td>{openModal && <Modal closeModal={setOpenModal}/>}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default MusicTable;