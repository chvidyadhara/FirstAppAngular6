import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObjectdisplayComponent } from './objectdisplay/objectdisplay.component';
import { Objectdisplay2Component } from './objectdisplay2/objectdisplay2.component';
import { StudentbodyComponent } from './studentbody/studentbody.component';
import { StComponent } from './st/st.component';
import { FirstComponent } from './first/first.component';


@NgModule({
  declarations: [
    AppComponent,
    ObjectdisplayComponent,
    Objectdisplay2Component,
    StudentbodyComponent,
    StComponent,
    FirstComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
