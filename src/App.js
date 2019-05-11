import React, { Component } from "react";
import "./App.css";

// Components
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  state = {
    todo: {
      value: "",
      priority: "low"
    },
    todos: []
  };

  handleChange = e => {
    const { todo } = this.state;
    const field = e.target.name;
    //creando una propiedad de manera dinamica
    todo[field] = e.target.value;
    this.setState({ todo });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { todos, todo } = this.state;
    if (!todo.value.length) return this.setState({error:"Debes agregar una tarea"})
    // agregamos el Todo al arreglo
    todos.push(todo);
    // limpiamos el objeto
    todo = {
      value: "",
      priority: "low"
    };
    // actualizamos el state e inicializamos el error
    this.setState({ todos, todo, error:undefined }, () => console.log(this.state));
  };

  handleDelete = (e,index) =>{
    let {todos} = this.state;
    todos.splice(index,1);
    this.setState({todos});
  }

  render() {
    const { todo,todos, error } = this.state;
    return (
      <div className="App">
        <h1>ToDos</h1>
        <section className="uk-section">
          <div className="uk-container">
            <div className="uk-grid-match uk-child-width-1-2" uk-grid="true">
              <div>
                <TodoForm
                  {...todo}
                  error={error}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              </div>
              <div>
                <TodoList todos={todos} handleDelete={this.handleDelete}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
