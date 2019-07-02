import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

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
  }
}
