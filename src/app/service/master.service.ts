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

}
