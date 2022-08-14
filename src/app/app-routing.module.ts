import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { LoanTypeComponent } from './loan-type/loan-type.component';

const routes: Routes = [
  {
    path:'addcustomer',
    component:AddCustomerComponent
  },{
    path:'loan',
    component:LoanTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
