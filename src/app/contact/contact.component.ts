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
  constructor(public http: Http,public contactService:ContactService) {
  }
  ngOnInit() {
    this.contactService.getContact()
      .subscribe(data => {
        this.pageContact = data;
      }, err => {
        console.log(err)
    })
  }
}
