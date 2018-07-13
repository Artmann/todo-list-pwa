import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/database';
import uuidv4 from 'uuid/v4';

import './App.css';
import TodoList from '../components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, text: 'Learn more about PWAs', completed: false },
        { id: 2, text: 'Do laundry', completed: false },
        { id: 3, text: 'Migrate legacy apps', completed: true },
      ]
    };

    const userId = uuidv4();

    const firebase = firebase.initializeApp({
      apiKey: "AIzaSyB-i2cDwv6VL5z1wbCWRheZgqGAnhZcX44",
      authDomain: "todolist-2a4b3.firebaseapp.com",
      databaseURL: "https://todolist-2a4b3.firebaseio.com",
      projectId: "todolist-2a4b3",
      storageBucket: "",
      messagingSenderId: "318633178285"
    });
  }

  updateTodo(todo) {
    const { todos } = this.state;

    this.setState({
      todos: todos.map(t => t.id === todo.id ? todo : t)
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <TodoList todos={ todos } onUpdatedTodo={ this.updateTodo.bind(this) } />
    );
  }
}

export default App;
