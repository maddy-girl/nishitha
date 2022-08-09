import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() product: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  onClickAddToCart(clickedProduct: any) {
    alert(clickedProduct.name)

  }

}
