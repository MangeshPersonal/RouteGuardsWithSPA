import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import {MerchantComponent} from './merchant/merchant.component'
import { Window } from 'selenium-webdriver';
@Injectable()
export class CanActivateRouteGuard implements CanDeactivate<MerchantComponent> {
  canDeactivate(component: CustomerComponent): boolean {
  
   return window.confirm("Ae you sure to navigate ! ?");
  }
}