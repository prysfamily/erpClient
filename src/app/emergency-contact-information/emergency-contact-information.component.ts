import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergency-contact-information',
  templateUrl: './emergency-contact-information.component.html',
  styleUrls: ['./emergency-contact-information.component.scss']
})
export class EmergencyContactInformationComponent implements OnInit {

  constructor(public fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

 // emergencyContactInformation(): void{}

  professionalInformation(): void{
    this.router.navigate(['/professionalInformation']);
}
}