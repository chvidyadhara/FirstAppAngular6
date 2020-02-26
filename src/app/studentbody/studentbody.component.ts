import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentbody',
  templateUrl: './studentbody.component.html',
  styleUrls: ['./studentbody.component.css']
})
export class StudentbodyComponent implements OnInit {

 employeedata = [{empname:"rk",id:7889,address:"hyd"},{a:"narandra",id:9999,address:"vig"}]
 
  constructor() {}
 
  ngOnInit() {
   }
  data = this.employeedata.filter(obj=>{
                    console.log(obj)
                var ke =  Object.keys(obj)
                   console.log(ke)
                   var val = Object.values(obj)
                   console.log(val)
  })
 
}
