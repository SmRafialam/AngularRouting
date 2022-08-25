import { MasterService } from './../service/master.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  Emplist:any;
  constructor(private service:MasterService) { 
    this.service.GetAllEmployee().subscribe(result=>{
      this.Emplist=result;
    })
  }

  ngOnInit(): void {
  }

}
