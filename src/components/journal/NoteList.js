import React, {useContext} from 'react'
import Note from './Note';
import NotesContext from "../../context/notes-context";

const NoteList = () => {
    const { notes } = useContext(NotesContext);
    return(
        <>
        {notes.map((note, index) => <Note key={index} title={note.title} body={note.body} />)}
        </>
    )
};

export default NoteList;