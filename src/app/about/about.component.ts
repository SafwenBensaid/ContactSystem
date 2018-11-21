import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about={nom:"Marine",email:"marine.veurriere@gmail.com"};
  constructor() { }

  ngOnInit() {
  }

}
