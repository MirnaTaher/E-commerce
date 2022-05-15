import {Component,OnInit}
from '@angular/core';
import { Store } from '@ngrx/store';
// import { EventEmitter } from 'stream';
import { WishlistAction } from '../store/wishlist.action';
import { RemoveWishlist } from '../store/wishlist.action';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wishlist;
  constructor(private store: Store<{wishlistItem}>) {
  }

  ngOnInit(): void {
    this.store.select('wishlistItem').subscribe((data) => (this.wishlist = data));
  }
  removeItem(value,i) {
    let arr = this.wishlist.wishlistArr.filter(
      (prod)=> prod.id != value.id
    );
    this.store.dispatch(new RemoveWishlist(arr))
  }
}
