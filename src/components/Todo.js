/**
 * Created by n06rin on 13.01.17.
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, changeTodo, removeTodo } from '../actions';
import '../bootstrap/css/bootstrap.min.css';

// const TodoComponent = ({ onClick, completed, headline, description, changeContent }) => {
//
//     let isEditing = false;
//
// };

class TodoComponent extends Component{
    constructor(props){
        super(props);

        this.state = {isEditingHeadline: false, isEditingDescription: false, headline: this.props.headline, description: this.props.description, deadline: this.props.deadline};
        this.changeHeadline = this.changeHeadline.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.refreshContent = this.refreshContent.bind(this);
        this.changeDeadline = this.changeDeadline.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
    }

    changeHeadline(e){
        this.setState({headline: e.target.value});
    }

    changeDescription(e){
        this.setState({description: e.target.value});
    }

    changeDeadline(e){
        this.setState({deadline: e.target.value});
    }
    changePriority(prior){
        return ()=>{
            console.log('prior is ' + prior);
            this.setState({priority: prior});
            this.refreshContent({priority: prior});
        }
    }

    refreshContent(directParams){

        //если мы передаем в объекте приоритет то установить его, иначе из стейта
        let priority = (directParams.priority != undefined) ? directParams.priority : this.state.priority;
        console.log('priority is ' + priority);
            this.props.dispatch(changeTodo(this.props.id, {
                headline: this.state.headline,
                description: this.state.description,
                priority: priority,
                deadline: this.state.deadline
            }));
            this.setState({isEditingHeadline:false, isEditingDescription: false});
    }

    removeTodo(){
        this.props.dispatch(removeTodo(this.props.id));
    }
    toggleStatus(){
        console.log('меняем статус');
        this.props.dispatch(toggleTodo(this.props.id));
    }

    render(){
        let head = ()=>{
            if (!this.state.isEditingHeadline)
                return(
                    <h4
                        className="list-group-item-heading"
                        onClick={()=>{
                            this.setState({isEditingHeadline: !this.state.isEditingHeadline});
                        }}
                    >
                        {this.props.headline}
                    </h4>
                )
            else
                return(
                    <input
                        className="list-group-item-heading"
                        autoFocus
                        value={this.state.headline}
                        onChange={this.changeHeadline}
                        onBlur={this.refreshContent}
                    />
                )
        };

        let description = ()=>{
            if(!this.state.isEditingDescription)
                return(
                    <p
                        className="list-group-item-text"
                        onClick={()=>{
                            this.setState({isEditingDescription: !this.state.isEditingDescription});
                        }}
                    >
                        {this.state.description}
                    </p>
                )
            else
                return(
                    <textarea
                        value={this.state.description}
                        onChange={this.changeDescription}
                        onBlur={this.refreshContent}
                        autoFocus
                    />
                )
        };

        let priorityButtons = (priority)=>{
            let classList = "btn btn-default";


            let buttons = [
                <button key={1} className={classList + ((priority == 0) ? ' active': '')} onClick={this.changePriority(0)}>!</button>,
                <button key={2} className={classList + ((priority == 1) ? ' active': '')} onClick={this.changePriority(1)}>!!</button>,
                <button key={3} className={classList + ((priority == 2) ? ' active': '')} onClick={this.changePriority(2)}>!!!</button>
            ];

            return (
                <div className="btn-group priority">
                    {buttons}
                </div>
            )
        }

        let status = (complited, deadline)=>{
            if (complited)
                return (<span style={{color: 'green'}}>{'Выполнено'}</span>)
            else
            {
                let now = new Date()

                console.log('полученный дэдлайн');
                console.log(new Date(deadline));

                console.log('сегодняшний день');
                console.log(new Date(now.getFullYear(), now.getMonth(), now.getDate()));


                if( new Date(deadline) <  new Date(now.getFullYear(), now.getMonth(), now.getDate())){
                    return (<span style={{color: 'red'}}>{'ПРОСРОЧЕНО'}</span>)
                }
                else
                    return (<span style={{color: 'yellow'}}>{'В процессе'}</span>)
            }


        }


        return (
            <div className="list-group-item task">
                {head()}
                <div className="row">
                    <div className="col-sm-10">
                        {description()}
                    </div>
                    <div className="col-sm-2">
                        {priorityButtons(this.props.priority)}
                        <div className="status">
                            {'Статус'}
                            {status(this.props.completed, this.props.deadline)}
                        </div>
                    </div>
                </div>
                <div className="deadline">
                    <label>
                        {'Крайний срок:'}
                        <input
                            type="date"
                            value={this.state.deadline}
                            onChange={this.changeDeadline}
                            onBlur={this.refreshContent}
                        />
                    </label>
                </div>
                <button
                    className="btn btn-sm btn-success"
                    onClick={this.toggleStatus}
                >{'выполнено'}</button>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={this.removeTodo}
                >{'удалить'}</button>
            </div>
        );
    }
}

TodoComponent.propTypes = {
    completed: PropTypes.bool.isRequired,
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

const Todo = connect()(TodoComponent);

export default Todo