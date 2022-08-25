import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeeComponent,
    AboutcompanyComponent,
    EmplistComponent,
    EmpaddComponent,
    ErrorComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AdminModule,
    UserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
