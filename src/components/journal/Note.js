import React, { useContext } from 'react';
import { Card } from "react-bootstrap";
import NotesContext from "../../context/notes-context";


const Note = (props) => {
    const { dispatchNotes } = useContext(NotesContext);

    const deleteNoteHandler = () => {
        dispatchNotes({
            type: "DELETE_NOTE",
            title: props.title
        })
    }
    return (
        <Card className="m-4">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.body}</Card.Text>
                <Card.Footer className="d-flex flex-row-reverse">
                    <button className="btn btn-danger" onClick={deleteNoteHandler}>Delete</button>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default Note;