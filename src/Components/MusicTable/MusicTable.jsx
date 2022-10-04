import DeleteButton from "../DeleteButton/DeleteButton";
import React, { useState } from 'react';
import "./MusicTable.css";
import Modal from 'react-modal';
import UpdateSong from "../UpdateSong/UpdateSong";
import "./MusicTable.css"




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
                                <td>
                                    <button className="edit_btn" onClick={() => setModalIsOpen(true)}>Edit Song</button>
                                    <Modal className="Modal" overlayClassName="Overlay" bodyOpenClassName="Body" isOpen={modalIsOpen}>
                                        <div>
                                            <div>
                                                <h2>Edit Song</h2>
                                                <UpdateSong id={song.id} getAllSongs={props.getAllSongs}/>
                                                <br></br>
                                                <br></br>
                                                <button onClick={() => setModalIsOpen(false)}>Close</button>
                                            </div>
                                        </div>
                                    </Modal>
                                </td>
                                <td><DeleteButton id={song.id} getAllSongs={props.getAllSongs}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default MusicTable;

