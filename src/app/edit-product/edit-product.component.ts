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
