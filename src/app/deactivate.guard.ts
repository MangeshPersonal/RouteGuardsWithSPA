import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';

@Injectable()
export class CanActivateRouteGuard implements CanDeactivate<CustomerComponent> {
  canDeactivate(component: CustomerComponent): boolean {
  
    if (component.formCompleted) {
      return confirm('You have some pending changes on the form ? ');
    }
    return true;
  }
}