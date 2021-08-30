import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
 
import { AngularMaterialModule } from './angular-material.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { ClientsComponent } from './clients/clients.component';
import { InvestorsComponent } from './investors/investors.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { InvoiceComponent } from './invoice/invoice.component';
 
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    DepartmentComponent,
    DesignationComponent,
    ClientsComponent,
    InvestorsComponent,
    PurchaseOrderComponent,
    InvoiceComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [ 
 
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
