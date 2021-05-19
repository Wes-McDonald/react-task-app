import React, {useState, useContext} from "react";
import NotesContext from "../../context/notes-context";

const AddNoteForm = () => {
    const [note, setNote] = useState({title: "", body: ""});
    const { dispatchNotes } = useContext(NotesContext);
    

    const onChangeHandler = (e) => {
        let newNote = {...note, [e.target.name]: e.target.value};
        setNote(newNote);

    };

    const addNoteHandler = (e) => {
        e.preventDefault();
        if(note.title && note.body) {
            dispatchNotes({type: "ADD_NOTE", ...note})

        } else {
            alert("please fill out form completely")
        }
    }

    const clearNotesHandler = () => {
        dispatchNotes({type: "CLEAR_NOTES"})
    };

    return(
        <>
            <h4>Add A New Journal Entry</h4>
            <form onSubmit={addNoteHandler}>
                <div className="form-group">
                    <label>Title:</label>
                    <input className="form-control" name="title" value={note.title}  onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <label>Body:</label>
                    <textarea className="form-control" name="body" value={note.body} onChange={onChangeHandler} />
                </div>
                
                <input className="btn btn-primary mr-2" type="submit" value="Add Note" />
                <input className="btn btn-primary" type="button" value="Clear All Notes" onClick={clearNotesHandler}/>

            </form>
        </>
    )
}

export default AddNoteForm;

    // now that we properly have an array of all our notes, we need to somehow get this data from this form component
    // to our NotesList component so that we can map through this and display it. Before hooks, we would need to utilize
    // callbacks in order for sibling components to share data, but now we will use a new hook, useContext, to share this 
    // between everything that's wrapped within our context