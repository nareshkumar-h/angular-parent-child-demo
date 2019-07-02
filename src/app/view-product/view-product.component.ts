import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor() { 
    console.log('ViewProduct - constructor called');
  }

  @Input('product')
  product:any; 

  ngOnInit() {
    console.log('ViewProduct -init called',this.product);
  }

}
