import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-information',
  templateUrl: './professional-information.component.html',
  styleUrls: ['./professional-information.component.scss']
})
export class ProfessionalInformationComponent implements OnInit {

  constructor(public fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {

  }

  salaryInformation(): void{
    this.router.navigate(['/salaryInformation']);
}

}