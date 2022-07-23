import store from "./store";
export const ADD_TEXT="ADD_TEXT";
export const RESET="RESET";

export type textState={
    text:string[]
}

export type textAction={
    type:string,
    payload:string
}

export type MapState=ReturnType<typeof store.getState>
export type MapDispatch=typeof store.dispatch