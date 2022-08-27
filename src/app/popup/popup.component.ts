import { MasterService } from './../service/master.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  closeResult = '';
  progressdata:any;
  alertrequired = false;
  alertmessage = 'Successfully saved.';
  alerttype = 'success';
  pgbarrequired = false;
  finaldata:any;

  constructor(private modalService: NgbModal,private service:MasterService) {
    //this.progressdata = 20;
   }

  ngOnInit(): void {
  }
  saveEmployee(data:any){
    this.service.saveEmployee(data).subscribe(result=>{
      this.finaldata=result;
      console.log(this.finaldata);
    });
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    },(reason)=>{
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`
    }
  }
  Savedata(){
    this.pgbarrequired = true;
    new Observable(Item=>{
      setTimeout(() => {
        Item.next (30);
      }, 2000);

        setTimeout(() => {
          Item.next (40);
        }, 3000);
        setTimeout(() => {
          Item.next (50);
        }, 4000);
        setTimeout(() => {
          Item.next (70);
        }, 5000);
        
        setTimeout(() => {
          Item.next (100);
          this.alertrequired = true;
          this.pgbarrequired = false;
        }, 6000);
    }).subscribe(result=>{
      this.progressdata = result ;
    });
  }

}
