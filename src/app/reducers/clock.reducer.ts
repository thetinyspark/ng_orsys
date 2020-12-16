import {createReducer, on} from "@ngrx/store"; 
import { updateClock } from "../actions/clock.actions";

export const initialState = "";

const myReducer = createReducer(
    initialState, 
    on(
        updateClock, 
        (state) =>{
            return new Date().toLocaleTimeString();
        } 
    )
);

export function clockReducer( state:any, action:any ){
    return myReducer(state, action);
}