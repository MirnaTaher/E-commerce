import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartCounterServiceService } from '../cart-counter-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public products:any[]=[];
  public grandTotal;
  constructor(private cartService: CartCounterServiceService) { }

  ngOnInit(): void {
    this.cartService.currentCartCounter.subscribe(res=>{
      this.products = res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
  addToCart(item: any){
    this.cartService.addToCart(item)
  }
  minusItem(item: any){
    this.cartService.minusItem(item)
  }
  plusItem(item: any){
    this.cartService.plusItem(item)
  }

}
