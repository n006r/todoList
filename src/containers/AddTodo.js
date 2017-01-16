/**
 * Created by n06rin on 13.01.17.
 */

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let headline, description;

    return (
        <div>
            <form
                className="addTask form-horizontal"
                onSubmit={e => {
                e.preventDefault();
                if (!headline.value.trim()) {
                    return
                }

                let formData = new FormData(e.target);

                let todoData = {};

                for (var [key, value] of formData.entries()) {
                    todoData[key] = value;
                }
                dispatch(addTodo(todoData));
                e.target.reset();
            }}>
                <div className="form-group">
                    <label htmlFor="task-header" className="col-sm-2 control-label">{'Название задания'}</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            name='headline'
                            ref={node => {
                            headline = node;
                        }} />
                    </div>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Введите описание задачи"
                        ref={node => {
                            description = node;
                        }}
                        name="description"
                    />
                </div>
                <div className="form-group">
                    <div className="btn-group priority col-sm-5">
                        {'Приоритет: '}
                        <label>
                            <input
                            type="radio"
                            name="priority"
                            value="0"
                            
                            />
                            обычное
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="priority"
                                value="1"
                            />
                            важное
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="priority"
                                value="2"
                            />
                            очень важное
                        </label>
                        {/*<label className="btn btn-default">!</label>*/}
                        {/*<button className="btn btn-default">!!</button>*/}
                        {/*<button className="btn btn-default">!!!</button>*/}
                    </div>
                    <div className="col-sm-4">
                        <div className="row">
                            <label htmlFor="deadline-date" className="control-label col-sm-5">
                                {'Крайний срок:'}
                            </label>
                            <div className="col-sm-7">
                                <input type="date" id="deadline-date" name="deadline" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 ">
                        <button type="submit" className="btn btn-success">добавить</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo);

export default AddTodo