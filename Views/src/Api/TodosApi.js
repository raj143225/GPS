import Axios from 'axios';

class TodosApi {
    static getTodos(username) {
        return new Promise((resolve, reject) => {
            if (username == "") {
                reject('Username cannot be empty');
            } else {
                this.getTodoAPI(username, function (Todos, error) {
                    if (error) {
                        reject('Something wrong please try again');
                    } else {
                        resolve(Todos);
                    }
                });
            }
        });
    }

    static getTodoAPI(username, callback){
        let response = null;
        let error = null;
        Axios.get(`http://localhost:3000/api/todos/${username}`)
            .then(response => {
                callback(response.data, error);
            }).catch(error => {
                callback(response, error);
            });
    }
}

export default TodosApi;