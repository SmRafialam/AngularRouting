import { ChildGuard } from './../guard/child.guard';
import { RoleGuard } from './../guard/role.guard';
import { AuthGuard } from './../guard/auth.guard';
import { LoginComponent } from '../user/login/login.component';
import { ListComponent } from '../user/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"user",canActivate:[RoleGuard],canActivateChild:[ChildGuard],
  children:[{path:"list",component:ListComponent},
            {path:"login",component:LoginComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
