import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList'

let destination = document.querySelector("#container");

ReactDOM.render(
    <div id="todoList-container">
        <TodoList />
    </div>,
    destination
);