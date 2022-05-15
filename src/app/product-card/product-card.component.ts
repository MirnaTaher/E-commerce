import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartCounterServiceService } from '../cart-counter-service.service';
import { WishlistAction } from '../store/wishlist.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() prod: any;

  wishlistItems: any[] = []; //this will be assigned to wishlistArr from wishlistReducer
  wishlist;
  constructor(
    private cartService: CartCounterServiceService,
    private store: Store<{wishlistItem}>
  ) {}

  ngOnInit(): void {
    this.store.select('wishlistItem').subscribe((data) => (this.wishlist = data));
  }
  
  // adding to cart
  addToCart(item: any) {
    this.cartService.addToCart(item);
    // if()
  }
  // adding to wishlist
  addToWishlist(value) {
    const i= this.wishlist.wishlistArr.findIndex(
      (prod)=> prod.id == value.id 
    )
    if(i == -1){
      this.store.dispatch(new WishlistAction(value))
    }
    // if(i >1){
    //   this.plusItem(value)
    // }
  }
  
  plusItem(item: any){
    this.cartService.plusItem(item)
  }
}
