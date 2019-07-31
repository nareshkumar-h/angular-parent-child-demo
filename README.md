# Parent Child Communication

#### Prerequisites
* Components
 * product-list
 * view-product
 * edit-product
 
#### Parent Component: ListProductsComponent
```
<h3>List Products (Parent)</h3>

<table border="1">
    <thead><tr><th>Sno</th><th>Product Name</th></tr></thead>
    <tbody *ngFor="let p of products">
        <tr><td>{{p.id}}</td><td>{{p.name}}</td>
        <td>
            <button (click)="viewProduct(p)">View</button>
            <button (click)="editProduct(p)">Edit</button>
        </td>
        </tr>
    </tbody>
</table>

<div *ngIf="selectedProduct && mode=='VIEW'">    
<app-view-product [product]="selectedProduct"></app-view-product>
</div>

<div *ngIf="selectedProduct && mode=='EDIT'">    
    <app-edit-product [product]="selectedProduct"  (productChange)="updateEventNotification($event)"></app-edit-product>
</div>
```
```
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,AfterViewInit  {

  @ViewChild(EditProductComponent, {static: false}) editProductComponent:EditProductComponent;

  mode:string;

  constructor() { 
    console.log('ProductList - constructor called');  
  }

  ngOnInit() {
    console.log('ProductList - init called');
  }

  products = [{"id":1,"name":"Lenova"},{"id":2,"name":"Dell"}];

  selectedProduct = null;

  viewProduct(product){
    this.selectedProduct = product;
    this.mode = "VIEW";
  }

  editProduct(product){
    this.selectedProduct = product;
    this.mode = "EDIT";
  }

  ngAfterViewInit() {
    console.log('Parent-ngAfterViewInit', this.editProductComponent); 
  }

  updateEventNotification(){
    console.log('Parent- got notification');
    console.log('fetch data from db');
    this.products = [{"id":1,"name":"Lenova"},{"id":2,"name":"Dell"}];
  }
}
```

#### Edit Product Component ( Child )
```
<h3>Edit Product</h3>
<form #f="ngForm">
    <table border="1">
        <tr>
            <th>Product Id</th>
            <td> {{product.id}}</td>
        </tr>
        <tr>
            <td>
                Product Name:
            </td>
            <td><input type="text" [(ngModel)]="product.name" name="name"> <br />
            </td>
        </tr>
        <tr>
            <td>
                <button (click)="update(product)">Update</button>
            </td>
            <td>
                <button (click)="close(f)">Close</button>
            </td>
        </tr>
    </table>
</form>
```
```
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';
import { format } from 'url';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  
})
export class EditProductComponent implements OnInit {

  @Output() productChange: EventEmitter<string> = new EventEmitter<string>();
  
  @Input('product') product: any;

  constructor() {

    console.log('EditProductComponent');
   }

  ngOnInit() {
    console.log('EditProductComponent - init' , this.product);
  }

  update(){
    console.log('Child - Update Data');
    this.productChange.emit('Child - Data Updated');
  }

  close(form:NgForm){
    console.log('Close');
    form.reset();

  }



}
```


