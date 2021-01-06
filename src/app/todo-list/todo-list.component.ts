import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  addTodo(input : HTMLInputElement):void{
    console.log(input.value);
    this.todoListService.addTodo(input.value);
    input.value = "";
  }

  getTodo():Todo[]{
    return this.todoListService.getTodo();
  }

}
