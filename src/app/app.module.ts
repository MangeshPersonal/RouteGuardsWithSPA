import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'; 

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MerchantComponent } from './merchant/merchant.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import {Approutes} from './Routing'

import {AuthGuardGuard} from './auth-guard.guard'
import {CanActivateRouteGuard} from './deactivate.guard';
import {ActivatechildGuard} from './activatechild.guard'

import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component'
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MerchantComponent,
    CustomerComponent,
    HomeComponent,
    AddCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot(Approutes,{useHash:true})
  ],
  providers: [AuthGuardGuard,CanActivateRouteGuard,ActivatechildGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
