import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';

import { RouterModule, Routes} from '@angular/router';
import { ListContactComponent } from './list-contact/list-contact.component';
import { AboutComponent } from './about/about.component';
import {ContactService} from '../services/contact.service';
import {FormsModule} from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';


const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'listContacts',component:ListContactComponent},
  {path:'newContact',component:NewContactComponent},
  {path:'editContact/:id',component:EditContactComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ListContactComponent,
    AboutComponent,
    NewContactComponent,
    EditContactComponent
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

