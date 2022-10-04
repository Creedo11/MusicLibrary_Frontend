import axios from "axios";
import "./DeleteButton.css"


const DeleteButton = (props) => {

    async function deleteSong(){
        const response = await axios.delete(`http://127.0.0.1:8000/api/music/${props.id}/`)
        console.log(response.data)
        props.getAllSongs()

    }

    return ( 
        <button className="delete_btn" onClick={deleteSong}>Delete</button>
     );
}
 
export default DeleteButton;