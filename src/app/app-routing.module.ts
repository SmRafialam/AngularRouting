import { RoleGuard } from './guard/role.guard';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { ErrorComponent } from './error/error.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpaddComponent } from './empadd/empadd.component';

const routes: Routes = [
  
  {component:HomeComponent,path:"",canActivate:[AuthGuard]},
  {component:AboutComponent,path:"About" ,canActivate:[AuthGuard],children:[{component:AboutcompanyComponent,path:"company"}]},
  {component:EmployeeComponent,path:"Employee" ,canActivate:[RoleGuard],children:[{component:EmplistComponent,path:""},{component:EmpaddComponent,path:"Edit/:id"}]},
  {component:ErrorComponent,path:"**"},
  {component:LoginComponent,path:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]        
})
export class AppRoutingModule { }
