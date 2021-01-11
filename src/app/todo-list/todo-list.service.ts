import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private list : Todo[] =[];

  constructor() { }

  addTodo(title : string):void{
    this.list.push(new Todo(title));
  }

  getTodo():Todo[]{
    return this.list;
  }

  remove(index : number): void{
    this.list.splice(index,1);
  }
}
