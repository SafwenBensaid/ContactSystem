import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/contact.model';
import {ContactService} from '../../services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact:Contact=new Contact();
  contactId:number;
  mode:String="edit";
  constructor(public contactService:ContactService, public router:Router, public activateRoute:ActivatedRoute) {
    this.contactId=activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    this.contactService.getContact(this.contactId)
      .subscribe(data => {
        this.contact = data;
      }, err => {
        console.log(err);
      });
  }

  updateContact() {
    this.contactService.setContact(this.contact)
      .subscribe(data=>{
        this.contact=data;
        this.mode="confirm";
      }, err=>{
        console.log(err);
      })
  }

  onListContacts() {
    this.router.navigate(['listContacts']);
  }
}

