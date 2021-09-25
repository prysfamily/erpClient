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
import { CountryComponent } from './country/country.component';
import { LeaveLedgerComponent } from './leave-ledger/leave-ledger.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ProfileComponent } from './profile/profile.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { EmergencyContactInformationComponent } from './emergency-contact-information/emergency-contact-information.component';
import { ProfessionalInformationComponent } from './professional-information/professional-information.component';
import { SalaryInformationComponent } from './salary-information/salary-information.component';
import { EmployeeToolBarComponent } from './employee-tool-bar/employee-tool-bar.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { NavService } from './nav.service';
import { EmployeeComponent } from './employee/employee.component';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { DataService  } from './common-service.service';
import { FooterComponent } from './footer/footer.component';
import { MyAccountComponent } from './my-account/my-account.component';
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
    CountryComponent,
    LeaveLedgerComponent,
    AttendanceComponent,
    ProfileComponent,
    ExpensesComponent,
    ContactInformationComponent,
    EmergencyContactInformationComponent,
    ProfessionalInformationComponent,
    SalaryInformationComponent,
    EmployeeToolBarComponent,
    MenuListItemComponent,
    EmployeeComponent,
    AcademicDetailsComponent,
    FooterComponent,
    MyAccountComponent,  
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
    NavService,
    DataService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
