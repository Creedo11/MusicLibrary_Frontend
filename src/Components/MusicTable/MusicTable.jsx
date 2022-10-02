import DeleteButton from "../DeleteButton/DeleteButton";
import React, { useState } from 'react';
import "./MusicTable.css";
import Modal from 'react-modal';
import UpdateSong from "../UpdateSong/UpdateSong";


const MusicTable = (props) => {

    
const [modalIsOpen, setModalIsOpen] = useState(false)

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
                                <td>
                                    <button onClick={() => setModalIsOpen(true)}>Edit Song</button>
                                    <Modal className="Modal" overlayClassName="Overlay" isOpen={modalIsOpen}>
                                        <div>
                                            <div>
                                                <h2>Edit Song</h2>
                                                <UpdateSong />
                                                <br></br>
                                                <br></br>
                                                <button onClick={() => setModalIsOpen(false)}>Close</button>
                                            </div>
                                        </div>
                                    </Modal>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default MusicTable;

