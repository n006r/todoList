import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'

import './index.css';


function getSavedTodos(){
    console.log('saved todos todos');
    let todos = JSON.parse(window.localStorage.getItem('todos'));
    if (todos == null) todos = [];
    console.log(todos);
    return ({todos: todos})
}

let store = createStore(todoApp, getSavedTodos());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
