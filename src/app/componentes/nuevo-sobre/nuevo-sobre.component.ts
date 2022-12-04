import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/listado';

@Component({
  selector: 'app-add-todo',
  templateUrl: './nuevo-sobre.component.html',
  styleUrls: ['./nuevo-sobre.component.css']
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!: string;
  @Input() todo: Todo = new Todo;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor(){}
  ngOnInit(): void {
  }
  OnSubmit(){
    const todo = {
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }
}
