import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';

import { RouterModule, Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {ContactService} from '../services/contact.service';
import {FormsModule} from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';


const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'newContact',component:NewContactComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

