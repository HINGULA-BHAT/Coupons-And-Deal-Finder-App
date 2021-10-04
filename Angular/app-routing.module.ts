import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerAreaComponent } from './components/customer-area/customer-area.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';
import { AddCustomerComponent } from './components/AdminFunctions/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './components/AdminFunctions/delete-customer/delete-customer.component';
import { GetAllCustomersComponent } from './components/AdminFunctions/get-all-customers/get-all-customers.component';
import { GetOneCustomerComponent } from './components/AdminFunctions/get-one-customer/get-one-customer.component';
import { UpdateCustomerComponent } from './components/AdminFunctions/update-customer/update-customer.component';
import { CustomerAuthGuardService } from './services/customer-auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {NewsComponent } from './components/news/news.component';
import { AddCompanyComponent } from './components/AdminFunctions/add-company/add-company.component';
import { DeleteCouponComponent } from './components/CompanyFunctions/delete-coupon/delete-coupon.component';
import { UpdateCouponComponent } from './components/CompanyFunctions/update-coupon/update-coupon.component';
import { AddCouponComponent } from './components/CompanyFunctions/add-coupon/add-coupon.component';
import { CompanyAuthGuardService } from './services/company-auth-guard.service';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompanyAreaComponent } from './components/company-area/company-area.component';
import { UpdateCompanyComponent } from './components/AdminFunctions/update-company/update-company.component';
import { DeleteCompanyComponent } from './components/AdminFunctions/delete-company/delete-company.component';
import { GetAllCompaniesComponent } from './components/AdminFunctions/get-all-companies/get-all-companies.component';
import { GetOneCompanyComponent } from './components/AdminFunctions/get-one-company/get-one-company.component';
import { GetAllCouponsComponent } from './components/CompanyFunctions/get-all-coupons/get-all-coupons.component';
import { ProductListComponent } from './components/CustomerFunctions/product-list/product-list.component';
import { ViewAllCouponsComponent } from './components/CustomerFunctions/view-all-coupons/view-all-coupons.component';
import { AddProductComponent } from './components/CompanyFunctions/add-product/add-product.component';



const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "aboutus", component:AboutusComponent},
  { path: "news", component:NewsComponent},
  

  {
    path: "company", component: CompanyAreaComponent, canActivate: [CompanyAuthGuardService], children: [
      { path: '', redirectTo: "viewAllCoupons", pathMatch: 'full' },
      { path: "createCoupon", component: AddCouponComponent },
      { path: "updateCoupon", component: UpdateCouponComponent },
      { path: "deleteCoupon", component: DeleteCouponComponent },
      { path: "getAllCoupons", component: GetAllCouponsComponent },
      { path: "addDeals", component: AddProductComponent },
     
      { path: "**", redirectTo: "viewAllCoupons", pathMatch: 'full' }
    ]
  },


  {
    path: "customer", component: CustomerAreaComponent, canActivate: [CustomerAuthGuardService], children: [
      { path: '', redirectTo: "AllCoupons", pathMatch: 'full' },
      
      {path: "products", component:ProductListComponent },
      {path: "viewAllCoupons", component:ViewAllCouponsComponent },

      { path: '**', redirectTo: "AllCoupons", pathMatch: 'full' }

    ]
  },
  {
    path: "admin", component: AdminAreaComponent, canActivate: [AdminAuthGuardService], children: [
      { path: '', redirectTo: "AllCompanies", pathMatch: 'full' },
      { path: "createCustomer", component: AddCustomerComponent },
      { path: "deleteCustomer", component: DeleteCustomerComponent },
      { path: "viewAllCustomers", component: GetAllCustomersComponent },
      { path: "viewCustomer", component: GetOneCustomerComponent },
      { path: "updateCustomer", component: UpdateCustomerComponent },
      { path: "createCompany", component: AddCompanyComponent },
      { path: "updateCompany", component: UpdateCompanyComponent },
      { path: "deleteCompany", component: DeleteCompanyComponent },
      { path: "viewAllCompanies", component: GetAllCompaniesComponent },
      { path: "viewCompany", component: GetOneCompanyComponent },
      { path: '**', redirectTo: "AllCompanies", pathMatch: 'full' }
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
