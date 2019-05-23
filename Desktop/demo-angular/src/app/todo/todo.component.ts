import { Component, OnInit } from '@angular/core';
import {Todo} from './todo.model'
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {
  public todos : Todo[] = []
  public desc:string = ''

  constructor(private service:TodoService) { }

  ngOnInit() {
  }

  addTodo(){
    // this.todos.push({
    //   id:UUID.UUID(),
    //   desc:this.desc,
    //   completed :false
    // })
    this.todos = this.service.addTodo(this.desc)
    this.desc = ''
  }
}
