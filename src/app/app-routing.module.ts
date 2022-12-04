import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/sobre/sobre.component';
import { TodosComponent } from './componentes/listados/listados.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path:'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
