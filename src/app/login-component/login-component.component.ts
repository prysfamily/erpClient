import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
>>>>>>> 9d222d854ead4e6e3ac758370c5f08ee2afb0a34
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

<<<<<<< HEAD
  constructor(private router: Router) { }
=======
>>>>>>> 9d222d854ead4e6e3ac758370c5f08ee2afb0a34

  ngOnInit(): void {
    this.reactiveForm()
  }
<<<<<<< HEAD
  login(): void{
    this.router.navigate(['/leaveLedger']);
  }
=======
  
    /* Reactive form */
    reactiveForm() {
      this.loginForm = this.fb.group({
        userName: ['admin', [Validators.required, Validators.minLength, Validators.maxLength]],
        password: ['admin', [Validators.required, Validators.minLength, Validators.maxLength]],
      });
    }
>>>>>>> 9d222d854ead4e6e3ac758370c5f08ee2afb0a34

    
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
