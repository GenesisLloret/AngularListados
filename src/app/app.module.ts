import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './componentes/listados/listados.component';
import { TodoItemComponent } from './componentes/listas-objetos/listas-objetos.component';
import { AddTodoComponent } from './componentes/nuevo-sobre/nuevo-sobre.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './componentes/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
