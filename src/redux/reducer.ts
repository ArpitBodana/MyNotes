import { ADD_TEXT, RESET, textAction, textState } from "./types"
const data = localStorage.getItem('myNotes');
const initialState = {
    text: data ? JSON.parse(data) : [],
}

const textReducer = (state: textState = initialState, action: textAction) => {
    switch (action.type) {
        case ADD_TEXT:
            localStorage.setItem('myNotes', JSON.stringify(data))
            return {
                ...state,
                text: [...state.text, action.payload + '\n']
            }
        case RESET:
            localStorage.removeItem('myNotes');
            return {
                ...state,
                text: []
            }
        default:
            return state
    }
}

export default textReducer;