import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from "../common-service.service";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  public loginForm!: FormGroup;
  isLoggedIn : Observable<boolean>;

  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
    this.isLoggedIn = csService.isLoggedIn();
  }


  ngOnInit(): void {
    this.reactiveForm()
  }
  
    /* Reactive form */
    reactiveForm() {
      this.loginForm = this.fb.group({
        userName: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
        password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      });
    }

    
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.loginForm.controls[control] as FormControl);
    return form.hasError('required') ?
      'This is mandatory' :
      form.hasError('maxlength') ?
      'Max length error' : 
      form.hasError('minlength') ?
      'Min length error' :
      form.hasError('pattern') ? 
       msg:'';
 }
  login(): void{
    console.log(this.loginForm.value);
    //this.rotuer.navigate(['/profile']);
   // localStorage.setItem('token', 'JWT');
   // this.isLoginSubject.next(true);
   let role = '';
    if(this.loginForm.value.userName === 'admin'){
      role = 'ADMIN';
    }else {
      role = 'STAFF';
    }
    console.log(role);
    this.csService.login(role);
    localStorage.setItem('token', 'JWT');
    this.router.navigate(['/profile']);
  }
}
