import * as types from '../Actions/ActionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.Todos, action = {}) {
    switch (action.type) {
        case types.LOAD_TODO_SUCCESS:
            return action.todos;
        default:
            return state;
    }
}