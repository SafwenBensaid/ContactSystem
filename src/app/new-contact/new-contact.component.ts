import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/contact.model';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:Contact=new Contact();
  mode:String="addNew";
  constructor(public contactService:ContactService) {
  }

  ngOnInit() {
  }

  addNewContact() {
    this.mode='addNew';
    location.reload();
  }



  saveContact() {
    this.contactService.setContact(this.contact)
      .subscribe(data=>{
        this.contact=data;
        this.mode="confirm";
      }, err=>{
        console.log(err);
      })
  }
}
