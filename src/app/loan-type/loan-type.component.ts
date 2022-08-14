import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-type',
  templateUrl: './loan-type.component.html',
  styleUrls: ['./loan-type.component.css']
})
export class LoanTypeComponent implements OnInit {
addLoanTypesForm:FormGroup|undefined;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.addLoanTypesForm=new FormGroup({
    //   'loanName':new FormControl(),
    //   'loanDescription':new FormControl(),
    //   'loanType':new FormControl(),
    //   'Date':new FormControl(),
    //   'LoanPayment':new FormControl()
    // })

    //formBuilder
// this.addLoanTypesForm=this.fb.group({
//   'loanName':new FormControl(),
//   'loanType':new FormControl(),
  
//    'Date':new FormControl(),
//     'LoanPayment':new FormControl()
// })


//set values one way of seeting value
// this.addLoanTypesForm=this.fb.group({
//   'loanName':new FormControl('personal loan'),
//   'loanDescription':new FormControl('20 % intrest'),
//   'loanType':new FormControl('bank'),
  
//    'Date':new FormControl('12-10-2022'),
//     'LoanPayment':new FormControl('online')
// })

this.addLoanTypesForm=this.fb.group({
  'loanName':new FormControl(),
  'loanType':new FormControl(),
  'loanDescription':new FormControl(),
   'Date':new FormControl(),
    'LoanPayment':new FormControl()
})


const newLoan={
  
  'loanName':'personal loan',
  'loanDescription':'20 % intrest',
  'loanType':'bank',
  
   'Date':'12-10-2022',
    'LoanPayment':'online'
}

//another way of setting value
this.addLoanTypesForm.setValue(newLoan)
  }
  addLoanType(){
    
    if(this.addLoanTypesForm!=undefined){
    console.log(this.addLoanTypesForm.value)}
  }
}



// read form data

// get value of entire form
//this.addLoanTypeForm.value


//get values of specific form control
//this.addLoansTypesForm.get('loansName').value


//get value on change 
//this.addLoansTypeForm.valueChanges
// this.addLoansTypeForm.valueChanges.subscribe(data=>{
//   console.log(data);
// })

