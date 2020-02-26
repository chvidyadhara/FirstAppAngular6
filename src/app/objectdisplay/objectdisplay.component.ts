import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objectdisplay',
  templateUrl: './objectdisplay.component.html',
  styleUrls: ['./objectdisplay.component.css']
})
export class ObjectdisplayComponent implements OnInit {
    sutdent:object = {
         studentname:"ravi",
         studentid:2345,
         phoneno:234567234,
         }
  constructor() { 
     
  }
   
  ngOnInit() {
  }

}
