import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "play football" },
      { id: 2, content: "study English" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5 text-primary">Todo's</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
