import { Component, OnInit } from '@angular/core';
import { CartCounterServiceService } from '../../cart-counter-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
// for adding to cart
public totalItem: number=0;

constructor(private cartService: CartCounterServiceService) { 
}

ngOnInit(): void {
  this.cartService.currentCartCounter.subscribe((res:any[])=>{
    this.totalItem=this.countTotalQuantity(res)
  })
}
countTotalQuantity(item: any) {
 return this.cartService.countTotalQuantity(item);    
}
}
