/**
 * Created by n06rin on 13.01.17.
 */

import React, {Component} from 'react'
import { connect } from 'react-redux';
import { loadState } from '../actions';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'



const StateToStorage =  (state) =>{
    window.localStorage.setItem('todos', JSON.stringify(state.todos));
    //console.log('updating todos in storage');

    return {}
}

class AppContainer extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="container">
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}

const App = connect(StateToStorage)(AppContainer);

export default App