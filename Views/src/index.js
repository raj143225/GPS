import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // webpack can import CSS files too!
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {loadTodos} from './Actions/TodosActions';

const store = configureStore();

store.dispatch(loadTodos('test'));

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);