import React, { Component } from 'react';
import FilterButtons from './FilterButtons';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import { VisibilityFilters } from './FilterList';


export default class Todos extends Component {
  state = { todos: [] , 
            visibilityFilter: VisibilityFilters.SHOW_ALL //"SHOW_COMPLETED", "SHOW_ACTIVE" 
          };
  currentId=0;

  toggleTodo = (id) => {
    this.setState({todos: 
      this.state.todos.map(todo =>
      (todo.id === id)
        ? {...todo, completed: !todo.completed}
        : todo
    ) }) 
  };

  deleteTodo = (todoId) => {
    this.setState({todos: this.state.todos.filter(todo => 
                                          todo.id !== todoId)});
  }

  addTodo = (todoText) => (
    this.setState((prevState) => (
      {
        todos: [
          ...prevState.todos,
          {
            id: this.currentId++,
            text: todoText,
            completed: false
          }
        ]
      }
    ))
  );


  changeFilter = (filter) => (
    this.setState({visibilityFilter: filter}));

  // sortText = (a,b) => {
  //   const textA = a.text.toUpperCase(); // ignore upper and lowercase
  //   const textB = b.text.toUpperCase(); // ignore upper and lowercase
  //   if (textA < textB) {
  //     return -1;
  //   }
  //   if (textA > textB) {
  //     return 1;
  //   }
  //   // names must be equal
  //   return 0;
  // }



  render = () => (
    <div >
      <h1>Todos (using state)</h1>
      <AddTodo onAddTodo={this.addTodo} />
      <FilterButtons 
          visibilityFilter={this.state.visibilityFilter} 
          onChangeFilter={this.changeFilter}  />  
      <VisibleTodoList 
              todos={this.state.todos}
              visibilityFilter={this.state.visibilityFilter} 
              onToggleTodo={this.toggleTodo}
              onDelete={this.deleteTodo}
              />
     </div>

  );
}



