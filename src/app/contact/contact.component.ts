import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import {ContactService} from '../../services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  pageContact: any;
  motCle: String="";
  currentPage:number=0;
  size:number=4;
  pages:Array<number>;
  constructor(public http: Http,public contactService:ContactService) {
  }
  ngOnInit() {
  }

  chercher() {
    this.contactService.getContact(this.motCle,this.currentPage,this.size)
  .subscribe(data => {
      this.pageContact = data;
      this.pages = new Array(data.totalPages);
    }, err => {
      console.log(err)
    })
  }

  gotoPage(i:number){
    this.currentPage=i;
    this.chercher();
  }


}
