import { LoginComponent } from './../admin/login/login.component';
import { ListComponent } from './../admin/list/list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"admin",
  children:[{path:"list",component:ListComponent},
  {path:"login",component:LoginComponent}]},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
