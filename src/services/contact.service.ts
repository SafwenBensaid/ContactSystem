import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ContactService{
  constructor(public http:Http){

  }

  getContact(){
    return this.http.get("http://localhost:8080/chercherContacts?motcle=I&page=0&size=5")
      .pipe(map(resp => resp.json()))
  }
}
