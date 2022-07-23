import { ADD_TEXT, RESET } from "./types"

export const addText=(text:string)=>{
    return{
        type:ADD_TEXT,
        payload:text
    }
}

export const reset=()=>{
    return{
        type:RESET
    }
}