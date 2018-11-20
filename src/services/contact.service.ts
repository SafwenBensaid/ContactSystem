import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {Contact} from '../model/contact.model';

@Injectable()
export class ContactService{
  constructor(public http:Http){
  }

  getContact(motCle:String,page:number,size:number){
    return this.http.get("http://localhost:8080/chercherContacts?motcle="+motCle+"&page="+page+"&size="+size)
      .pipe(map(resp => resp.json()))
  }

  setContact(contact:Contact) {
    return this.http.post("http://localhost:8080/contactRest", contact)
      .pipe(map(resp=>resp.json()))
  }

}
