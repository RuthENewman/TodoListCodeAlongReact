import React, { Component } from 'react';
import TodoList from './components/TodoList';

console.log(React)

class App extends Component {
  state = {
    todos: [],
    showCompleted: false
  }

  completeTodo = (id) => {
    // const todos = [...this.state.todos]
    // const foundTodo = todos.find(todo => todo === todo.id)
    // const foundTodoCopy = JSON.parse(JSON.stringify(foundTodo))
    // foundTodoCopy.completed = true;
    // const index = todos.indexOf(foundTodo)
    // todos[index] = foundTodoCopy;
    // this.setState({ todos })
    const todos = this.state.todos.map(todo => todo.id === id
      ? {...todo, completed: true}
      : todo
    )
    this.setState({ todos })
  }

  componentDidMount () {
    console.log('App mounted!')
    this.getTodos()
  }

  getTodos = () => {
    console.log('getting todos!')
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(resp => resp.json())
      .then(todos => this.setState({ todos }))
  }

    getIncompleteTodos = () => {
      return this.state.todos.filter(todo => !todo.completed)
    }

  render() {
    console.log(this.state)
    const incompleteTodos = this.getIncompleteTodos()
    return (
      <div id="App">
        <h1>React Component Lifecycle</h1>
        <TodoList completeTodo={this.completeTodo} todos={incompleteTodos}/>
      </div>
    );
  }
}

export default App;
