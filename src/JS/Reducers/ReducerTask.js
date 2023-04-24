import { ADD_TASK } from './../constants/ActionsType';
import {EDIT_TASK} from './../constants/ActionsType';
import{DELETE_TASK } from './../constants/ActionsType';

const initialState = []


export const reducerTask = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_TASK:
            return [...state, payload]
        case EDIT_TASK: 
            return state.map((todo) => todo.id === payload.id ? {...todo, text: payload.text} : todo)
        case DELETE_TASK:
            return state.filter((todo)=>todo.id!= payload)
           default:
            break;
    }
}
