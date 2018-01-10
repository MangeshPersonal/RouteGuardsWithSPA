

import {Routes} from '@angular/router';  
import {CustomerComponent} from './customer/customer.component'
import {AdminComponent} from './admin/admin.component'
import {MerchantComponent} from './merchant/merchant.component'
import {HomeComponent} from './home/home.component'
import {AddCustomerComponent} from './add-customer/add-customer.component'
import {EditCustomerComponent} from './edit-customer/edit-customer.component'

import {AuthGuardGuard} from './auth-guard.guard'
import {ActivatechildGuard} from './activatechild.guard'
import {CanActivateRouteGuard} from './deactivate.guard'

export const Approutes: Routes = 
           [  
                 { path: '', component: HomeComponent},  
                 { path: 'Home', component: HomeComponent},  
                 { path: 'merchant', component: MerchantComponent,canDeactivate:[CanActivateRouteGuard] },  
                 {path: 'admin', component: AdminComponent,canActivate:[AuthGuardGuard] } , 
                    {
                      path:'customer',component:CustomerComponent,canActivateChild:[ActivatechildGuard]
                      ,children:[{path:'customeredit',component:EditCustomerComponent},
                      {path:'customeradd',component:AddCustomerComponent} 
                                ]
                    }
            ]  

