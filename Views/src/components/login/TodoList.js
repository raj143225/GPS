import React, {PropTypes} from 'react';

const TodoList = ({todos}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Category</th>
                <th>Length</th>
            </tr>
            </thead>
            <tbody>
            {todos.map(todo =>
                   console.log(todo)
            )}
            </tbody>
        </table>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

export default TodoList;