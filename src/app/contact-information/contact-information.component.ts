import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {

  constructor(public fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  emergencyContactInformation(): void{
    this.router.navigate(['/emergencyContactInformation']);

  }
}
