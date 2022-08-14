import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
// what to import Form Module in app module
  constructor() { }
fistName='';
terms=false;
fav_language=''
message=''
cars=''
count=0;
  ngOnInit(): void {
  }
  addCustomerForm(FormValue:NgForm){
    console.log(FormValue.value);
  }

}
