import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  proceedlogin(name:any,role:any){
    localStorage.setItem("username",name),
    localStorage.setItem("role",role),
    this.router.navigate([""]);
  }

}
