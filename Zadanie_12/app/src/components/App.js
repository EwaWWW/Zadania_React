import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import '../css/style.css';

export default class App extends React.Component {
    state =
        {todos:
            [
                {name: 'Todo 1', isFinished: true},
                {name: 'Todo 2', isFinished: true },
                {name: 'Todo 3', isFinished: false},
                {name: 'Todo 4', isFinished: true},
                {name: 'Todo 5', isFinished: true},
                {name: 'Todo 6', isFinished: false},
            ]
        };

    newTodoList = (inputValue) => {
        const newTodoList = {name: inputValue, isFinished: false};
        this.setState(() =>({todos: [...this.state.todos, newTodoList]}));
    };

    render(){
        return <React.Fragment>
            {this.state.todos.map((todo, id) =>
            <Todo name={todo.name} isFinished={todo.isFinished} key={id}/>)}
            <AddTodo inputOnChange={this.newTodoList}/>
        </React.Fragment>
    }
};
