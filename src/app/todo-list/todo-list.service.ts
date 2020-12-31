import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  list : string[] = [];

  constructor() { }

  addTodo(todo : string):void{
    this.list.push(todo);
  }

  getTodo():string[]{
    return this.list;
  }
}
