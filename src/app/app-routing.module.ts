import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditaragregaritemComponent } from './editaragregaritem/editaragregaritem.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'nuevo', component: EditaragregaritemComponent},
  {path: 'editar/:id', component: EditaragregaritemComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
