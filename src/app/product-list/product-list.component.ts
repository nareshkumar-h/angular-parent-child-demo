import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit  {
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


  updateEventNotification(dataModified){
    console.log('Data from Child', dataModified);
    console.log('Parent- got notification');
    if (dataModified){
      console.log('fetch latest data from db');
      this.products = [{"id":1,"name":"Lenova"},{"id":2,"name":"Dell"}];
    }
    else{
      console.log('No data changed in child component');
    }
  }
}
