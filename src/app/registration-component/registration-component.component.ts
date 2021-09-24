import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.scss']
})
export class RegistrationComponentComponent implements OnInit {

  constructor(public fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  //register(): void{}
  contactInformation(): void{
    this.router.navigate(['/contactInformation']);

  }
}
