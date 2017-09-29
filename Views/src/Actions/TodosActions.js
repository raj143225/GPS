import * as types from './ActionTypes';
import TodosApi from '../Api/TodosApi';

export function loadTodosSuccess(todos) {
    return {type: types.LOAD_TODO_SUCCESS, todos};
}

export function loadTodos(username) {
    return function (dispatch) {
        return TodosApi.getTodos(username).then(Todos => {
            dispatch(loadTodosSuccess(Todos));
        }).catch(error => {
            throw (error);
        });
    };
}