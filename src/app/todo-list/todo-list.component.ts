import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from 'app/actions';
import { IAppState } from 'app/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @select() todos;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  addTodo(input) {
    if (!input.value)
      return;

    this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });
    input.value = '';
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id});
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }


}
