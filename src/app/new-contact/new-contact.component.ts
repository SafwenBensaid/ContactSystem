import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/contact.model';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:Contact=new Contact;
  mode:String="insert";
  constructor(public contactService:ContactService, public router:Router) { }

  ngOnInit() {
  }

  onSaveContact(dataForm) {
    this.contactService.insertContact(dataForm)
      .subscribe(data=>{
        this.contact=data;
        this.mode="confirm";
      },err=>{
        console.log(JSON.parse(err._body));
      })
  }

  onListContacts() {
    this.router.navigate(['listContacts']);
  }
}
