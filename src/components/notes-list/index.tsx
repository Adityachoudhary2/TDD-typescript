import { useEffect } from "react";
import axios from "axios";


 const NoteList = () => {
    useEffect(() => {
        axios.get("notes-list").then((response) => {
           
            const {data} = response;
            const {notes} = data;
            console.log(notes);
        })
    }, [])

    return null;
}; 
export default NoteList


