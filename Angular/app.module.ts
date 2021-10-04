import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AddCustomerComponent } from './components/AdminFunctions/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/AdminFunctions/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/AdminFunctions/delete-customer/delete-customer.component';
import { GetAllCustomersComponent } from './components/AdminFunctions/get-all-customers/get-all-customers.component';
import { GetOneCustomerComponent } from './components/AdminFunctions/get-one-customer/get-one-customer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';
import { CustomerAreaComponent } from './components/customer-area/customer-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ListFilterCompanyPipe } from './pipes/list-filter-company.pipe';
import { ListFilterCustomerPipe } from './pipes/list-filter-customer.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsService } from './services/products.service';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NewsComponent } from './components/news/news.component';
import { AddCompanyComponent } from './components/AdminFunctions/add-company/add-company.component';
import { AddCouponComponent } from './components/CompanyFunctions/add-coupon/add-coupon.component';
import { DeleteCouponComponent } from './components/CompanyFunctions/delete-coupon/delete-coupon.component';
import { UpdateCouponComponent } from './components/CompanyFunctions/update-coupon/update-coupon.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompanyAreaComponent } from './components/company-area/company-area.component';
import { UpdateCompanyComponent } from './components/AdminFunctions/update-company/update-company.component';
import { DeleteCompanyComponent } from './components/AdminFunctions/delete-company/delete-company.component';
import { GetAllCompaniesComponent } from './components/AdminFunctions/get-all-companies/get-all-companies.component';
import { GetOneCompanyComponent } from './components/AdminFunctions/get-one-company/get-one-company.component';
import { GetAllCouponsComponent } from './components/CompanyFunctions/get-all-coupons/get-all-coupons.component';
import { ViewAllCouponsComponent } from './components/CustomerFunctions/view-all-coupons/view-all-coupons.component';
import { ProductListComponent } from './components/CustomerFunctions/product-list/product-list.component';
import { AddProductComponent } from './components/CompanyFunctions/add-product/add-product.component';




@NgModule({
  declarations: [
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    GetAllCustomersComponent,
    GetOneCustomerComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    AdminAreaComponent,
    CustomerAreaComponent,
    ListFilterCompanyPipe,
    ListFilterCustomerPipe,
    AboutusComponent,
    NewsComponent,
    AddCompanyComponent,
    AddCouponComponent,
    DeleteCouponComponent,
    UpdateCouponComponent,
    PageNotFoundComponent,
    CompanyAreaComponent,
    UpdateCompanyComponent,
    DeleteCompanyComponent,
    GetAllCompaniesComponent,
    GetOneCompanyComponent,
    GetAllCouponsComponent,
    ViewAllCouponsComponent,
    ProductListComponent,
    AddProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    ListFilterCompanyPipe,
    ListFilterCustomerPipe,
    ProductsService
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
