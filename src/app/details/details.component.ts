import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from '../products-service.service';
import { CartCounterServiceService } from '../cart-counter-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    public router: ActivatedRoute,
    private productsService: ProductsServiceService,
    private cartService: CartCounterServiceService
  ) {}
  item: any;
  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.productsService.getProductDetails(param.id).subscribe((data) => {
        this.item = data;
        //assigning quantity to each object once we open the details page
        Object.assign(this.item, { quantity: 1, total: 1});
      });
    });
  }
  // adding to cart
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
