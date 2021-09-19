import { Component, OnInit, ChangeDetectorRef,  OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MediaMatcher,  } from '@angular/cdk/layout';


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
  mobileQuery!: MediaQueryList;
  opened! :  boolean;
  private _mobileQueryListener: () => void;
  constructor(public fb: FormBuilder,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }
  
  ngOnInit(): void {
    this.reactiveForm();
    this.opened= this.mobileQuery.matches ? false : true;
  }
   ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
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
