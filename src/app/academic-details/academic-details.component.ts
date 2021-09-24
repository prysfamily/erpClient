import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-academic-details',
  templateUrl: './academic-details.component.html',
  styleUrls: ['./academic-details.component.scss']
})
export class AcademicDetailsComponent implements OnInit {
  public academicDetailsForm!: FormGroup;

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.academicDetailsForm = this._fb.group({
      academicDetailsRows:this._fb.array([this.initRows()])
    });
  }

  get formArr() {
    return this.academicDetailsForm.get("academicDetailsRows") as FormArray;
  }
  get academicDetailsRows() {
    return this.academicDetailsForm.get("academicDetailsRows") as FormArray;
  }

  initRows() {
    return this._fb.group({
      course: [""],
      institution: [""],
      universityOrBoard: [""],
      yearOfPassing: [""],
      percentageOfMarks: [""]
    });
  }

  addAcademicDetailsRow() {
    this.formArr.push(this.initRows());
  }
  
  deleteAcademicDetailsRow(index: number) {
    this.formArr.removeAt(index);
  }
  academicDetails(): void{}
}


