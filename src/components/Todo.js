import React, { Component } from 'react';

class Todo extends Component {


  componentDidMount() {
    console.log(`Mounting: `, this.props.todo.title)
  }

  componentWillUnmount() {
    console.log(`Hey, I'm ${this.props.todo.title}, why are you doing this to me???`)
  }

  render() {
    const { todo, completeTodo } = this.props
    return (
      <li onClick={() => completeTodo(todo.id)}>{todo.title}</li>
    )
  }

}


export default Todo;
