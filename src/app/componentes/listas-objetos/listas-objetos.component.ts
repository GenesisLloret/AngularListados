import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/listado';

@Component({
  selector: 'app-todo-item',
  templateUrl: './listas-objetos.component.html',
  styleUrls: ['./listas-objetos.component.css']
})
export class TodoItemComponent implements OnInit {
[x: string]: any;
  @Input()
  todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor(){}
  ngOnInit(): void {}
  onClick(todo: Todo){
      this.todoDelete.emit(todo);
      console.log("Objeto removido");
  }
  }
