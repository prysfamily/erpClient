import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  public countryForm!: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.countryForm = this.fb.group({
      countryCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      countryDescription: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      nationality: ['', [Validators.required,Validators.minLength, Validators.maxLength]],
      
    });
  }

  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.countryForm.controls[control] as FormControl);
    return form.hasError('required') ?
      'This is mandatory' :
      form.hasError('maxlength') ?
      'Max length error' : 
      form.hasError('minlength') ?
      'Min length error' :
      form.hasError('pattern') ? 
       msg:'';
 }
  countryRegistration(): void{
    console.log(this.countryForm.value);
  }
}
