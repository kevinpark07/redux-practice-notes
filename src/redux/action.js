export const addNote = (note) => {
    
    return function (dispatch) {
        fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(note)
        }).then(resp => resp.json())
        .then(noteObj => dispatch({ type: "add note", payload: noteObj }))
    }
}

export const getNotes = () => {
    console.log("first dispatch invoked")
    return function (dispatch, getState) {
        console.log("nested function invoked get state: ", getState())
        fetch("http://localhost:3000/notes")
        .then(resp => resp.json())
        //How do we send data to our reducer function?
        //By using dispatch
        .then(data => dispatch({type: "add_notes_from_fetch", payload: data}))
    }

}

// data => dispatch({type: "add_notes_from_fetch", payload: data})