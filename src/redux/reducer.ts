import { ADD_TEXT, RESET, textAction, textState } from "./types"

const initialState = {
    text: []
}

const textReducer = (state: textState = initialState, action: textAction) => {
    switch (action.type) {
        case ADD_TEXT:
            return {
                ...state,
                text:[...state.text,action.payload+'\n']
            }
        case RESET:
            return{
                ...state,
                text:[]
            }
        default:
            return state
    }
}

export default textReducer;