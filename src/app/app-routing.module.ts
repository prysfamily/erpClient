import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { ClientsComponent } from './clients/clients.component';
import { InvestorsComponent } from './investors/investors.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { CountryComponent } from './country/country.component';
import { LeaveLedgerComponent } from './leave-ledger/leave-ledger.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ProfileComponent } from './profile/profile.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { EmergencyContactInformationComponent } from './emergency-contact-information/emergency-contact-information.component';
import { ProfessionalInformationComponent } from './professional-information/professional-information.component';
import { SalaryInformationComponent } from './salary-information/salary-information.component';
import { EmployeeComponent } from './employee/employee.component';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'designation', component: DesignationComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'investors', component: InvestorsComponent },
      { path: 'purchaseOrder', component: PurchaseOrderComponent},
      { path: 'country', component: CountryComponent},
      { path: 'leaveLedger', component: LeaveLedgerComponent},
      { path: 'attendance', component: AttendanceComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'expenses', component: ExpensesComponent},
      { path: 'contactInformation', component: ContactInformationComponent},
      { path: 'emergencyContactInformation', component: EmergencyContactInformationComponent},
      { path: 'professionalInformation', component: ProfessionalInformationComponent},
      { path: 'salaryInformation', component: SalaryInformationComponent},
      { path: 'employee', component: EmployeeComponent},
      { path: 'academicDetails', component: AcademicDetailsComponent},
      { path: 'myAccount', component: MyAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
