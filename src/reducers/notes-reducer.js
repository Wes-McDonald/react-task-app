const notesReducer = (state, action) => {
    switch(action.type) {
        case "ADD_NOTE":
            return [
                ...state,
                {title: action.title, body: action.body}
            ];
        case "DELETE_NOTE":
            return state.filter(note => note.title !== action.title);
        case "CLEAR_NOTES":
            return [];
        default:
            return state;
    }
};

export default notesReducer; 
