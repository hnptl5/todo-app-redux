import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { IAppState } from 'app/store';
import { CLEAR_TODO } from 'app/actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {

@select() todos;
@select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  clearTodos(){
    this.ngRedux.dispatch({ type: CLEAR_TODO});
  }


}
