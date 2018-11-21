import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../model/contact.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  pageContact: any;
  motCle: String = '%';
  currentPage: number = 0;
  size: number = 4;
  pages: Array<number>;
  contact: Contact = new Contact;

  constructor(public http: Http, public contactService: ContactService, public router:Router) {
  }

  ngOnInit() {
    this.findContacts();
  }

  findContacts() {
    this.contactService.findContacts(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        this.pageContact = data;
        this.pages = new Array(data.totalPages);
      }, err => {
        console.log(err);
      });
  }

  gotoPage(i: number) {
    this.currentPage = i;
    this.findContacts();
  }

  onEditContact(id: number) {
    this.router.navigate(['editContact', id]);
  }

}
