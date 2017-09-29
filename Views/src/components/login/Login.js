import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todosActions from '../../Actions/TodosActions';

class Login extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            username: ""
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.getOrUpdateUserTodos = this.getOrUpdateUserTodos.bind(this);
    }

    updateCourseState(event) {
        let username = event.target.value;
        return this.setState({username: username});
    }

    getOrUpdateUserTodos() {
        this.props.actions.loadTodos(this.state.username)
            .then(() => {console.log(this.props.todo);});
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control"
                       placeholder="username" value={this.state.username} onChange={this.updateCourseState} />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default" onClick={this.getOrUpdateUserTodos} >Submit
                    </button>
                </span>
            </div>
        );
    }
}

Login.propTypes= {
    actions: PropTypes.object.isRequired,
    todo: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        todo: state.Todo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(todosActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);