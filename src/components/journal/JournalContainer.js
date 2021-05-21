import React, { useReducer } from "react";
import AddNoteForm from "./AddNoteForm";
import "./journal.css";
import NoteList from "./NoteList";
import NotesContext from "../../context/notes-context";
import notesReducer from "../../reducers/notes-reducer";

const JournalContainer = () => {
    const [notes, dispatchNotes] = useReducer(notesReducer, []);

    // const addNewNotes = (note) => {
    //     setNotes(prevState => (
    //         [...prevState, note]
    //     ));
    // };

    // useEffect(() => {
    //     console.log("Hello World", notes)
    // }, [])

    return(
        <div>
            <NotesContext.Provider value={{notes, dispatchNotes}}>
                <h1>Journal Notes</h1>
                <AddNoteForm />
                <NoteList />
            </NotesContext.Provider>
        </div>
    )
};

export default JournalContainer;