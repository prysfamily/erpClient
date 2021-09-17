import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
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
  constructor(public fb: FormBuilder,private router:Router) { }


  ngOnInit(): void {
    this.reactiveForm()
  }
  
    /* Reactive form */
    reactiveForm() {
      this.loginForm = this.fb.group({
        userName: ['admin', [Validators.required, Validators.minLength, Validators.maxLength]],
        password: ['admin', [Validators.required, Validators.minLength, Validators.maxLength]],
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
    this.router.navigate(['/profile']);
  }
}
