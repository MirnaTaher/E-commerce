import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { CartCounterServiceService } from '../cart-counter-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  productList: Array<any> = [];
  cartCounter;
  wishlistItems: Array<any> = [];
  constructor(
    private productsService: ProductsServiceService,
    private cartService: CartCounterServiceService
  ) {}

  ngOnInit(): void {
    this.productsService.getProductsList().subscribe(
      (res:any) => {
        this.productList = res;
        //assigning quantity to each object
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: 1});
        });
      },
      (error) => {
      }
    );

    this.cartService.currentCartCounter.subscribe(
      (value) => (this.cartCounter = value)
    );
  }

  receiveProd(prod: any) {
    this.cartService.updateCartCounter(this.cartCounter + 1);
  }

}
