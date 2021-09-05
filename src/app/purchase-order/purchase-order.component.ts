import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {
  public purchaseOrderForm!: FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.purchaseOrderForm = this._fb.group({
      purchaseOrderRows:this._fb.array([this.initRows()])
    });

  }

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
  purchaseOrder(): void{}
}
