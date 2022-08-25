import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  apiurl="https://fakestoreapi.com/products/category/jewelery";

  GetAllEmployee(){
    return this.http.get(this.apiurl);
  }
  isLoggedIn(){
    return localStorage.getItem("username")!=null;
  }

  haveRoleaccess(menuname:any){
    const role = localStorage.getItem("role");
    if(role == 'admin'){
      return true;
    }
    else{
    if(menuname == 'contact'){
      return true;
    }
    else{
      return false;
    }
  }
}}
