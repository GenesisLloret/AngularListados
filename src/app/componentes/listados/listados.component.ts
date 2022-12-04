import { Component, OnInit } from '@angular/core';
import { Todo } from '../../listado';

@Component({
  selector: 'app-todos',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  localtem!: string;
  constructor (){
    var localtem = localStorage.getItem("todos");
    if(this.localtem == null){
      this.todos=[];
    } else{
      this.todos = JSON.parse(this.localtem);
    }
    }

  ngOnInit(): void {}
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
