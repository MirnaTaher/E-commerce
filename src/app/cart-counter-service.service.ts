import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartCounterServiceService {
  private cartItemList: any[] = []; //the array of objects showing in the wishlist
  private cartCounter = new BehaviorSubject<any>([]); //behavior subject for each new subject
  currentCartCounter = this.cartCounter.asObservable();

  constructor() {}
  // changing/updating the counter
    updateCartCounter(newCounterValue: any) {
    if(this.cartItemList.length>1){
      this.cartItemList.push(...newCounterValue);
      this.getTotalPrice();
      this.cartCounter.next(newCounterValue);
      this.countTotalQuantity(this.cartItemList)
      
    }
  }
  // adding to the cart
  addToCart(newCounterValue: any) {
    const i = this.cartItemList.findIndex(
      (cartCounter) => cartCounter.id == newCounterValue.id
    );
    if (i == -1) {
      let x=JSON.parse(JSON.stringify(newCounterValue))
      x.quantity+1;
      this.cartItemList.push(x);
      this.cartCounter.next(this.cartItemList);
      this.getTotalPrice();
    }
    if(i > -1){
      this.countTotalQuantity(newCounterValue)
      this.getTotalPrice();
    }

  }
  // getting total price
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList?.map((a: any) => {
      grandTotal += a.quantity*a.price;
    });
    return grandTotal;
  }
  // removing one item from the cart
  removeCartItem(newCounterValue: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (newCounterValue.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.cartCounter.next(this.cartItemList);
    this.getTotalPrice();
  }
  // remove all cart items
  removeAllCart() {
    this.cartItemList = [];
    this.cartCounter.next(this.cartItemList);
    this.getTotalPrice();
  }
  // minusing the amount
  minusItem(newCounterValue:any){
    const i = this.cartItemList.findIndex(
      (cartCounter) => cartCounter.id == newCounterValue.id
    );
    this.cartItemList[i].quantity--;
    if(this.cartItemList[i].quantity ==0){
      this.removeCartItem(newCounterValue)
    }
    this.getTotalPrice();
  }

  plusItem(newCounterValue:any){
    const i = this.cartItemList.findIndex(
      (cartCounter) => cartCounter.id == newCounterValue.id
    );
    this.cartItemList[i].quantity++;
    this.getTotalPrice();
  }
  // changing the quantity
  countTotalQuantity(arr: any[]):number{
    let totalQuant=0;
    arr.forEach(element => {
      totalQuant+= element.quantity
    });
    return totalQuant
  }

}
