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

  loadValues(FormValue:NgForm){
    let userDetails={
    fistName:'kavi',
    terms:false,
    fav_language:'CSS',
    cars:'opel',
    message:'hi i am kavi'
    }
    FormValue.setValue(userDetails)
  }
  addCustomerForm(FormValue:NgForm){
    console.log(FormValue.value);
  }
  resetForm(FormValue:NgForm){
FormValue.resetForm()
  }

}
