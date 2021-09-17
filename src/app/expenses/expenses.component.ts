import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  public purchaseOrderForm!: FormGroup;

  constructor(private _fb:FormBuilder) { }


  get formArr() {
    return this.purchaseOrderForm.get("purchaseOrderRows") as FormArray;
  }
  
  get purchaseOrderRows() {
    return this.purchaseOrderForm.get("purchaseOrderRows") as FormArray;
  }

  initRows() {
    return this._fb.group({
      descriptionOfItems: [""],
      quantity: [""],
      unitPrice: [""],
      totalCostINR: [""]
    });
  }



  addPurchaseOrderRow() {
    this.formArr.push(this.initRows());
  }
  

  deletePurchaseOrderRow(index: number) {
    this.formArr.removeAt(index);
  }

  ngOnInit(): void {
    this.purchaseOrderForm = this._fb.group({
      purchaseOrderRows:this._fb.array([this.initRows()])
    });


  }
  expenses(): void{}
}
