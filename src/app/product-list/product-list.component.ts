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

  ngOnChanges() {
    alert('Alert from child component, on change in parent component.');
  }

  updateEventNotification(){
    console.log('Parent- got notification');
    console.log('fetch data from db');
    this.products = [{"id":1,"name":"Lenova"},{"id":2,"name":"Dell"}];
  }
}
