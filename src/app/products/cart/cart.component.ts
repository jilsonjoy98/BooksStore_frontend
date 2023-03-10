import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


  cartItems:any=[]
  grandTotal:number=0
  discount:number=0
  discountTotal:number=0
  checkoutMsg=""
constructor(private cart:CartService, private router:Router){

}

ngOnInit(): void {
  this.cart.cartItemList.subscribe(
    (data:any)=>{
      this.cartItems=data
    }
  )
    let total = this.cart.grandTotal()
    this.grandTotal = Number(total.toFixed(2))
    this.discountTotal = this.grandTotal
  
}

// removeItem(book)
removeItem(book:any){
  this.cart.removeCartItem(book)
  let total = this.cart.grandTotal()
  this.grandTotal = Number(total.toFixed(2))
  this.discountTotal = this.grandTotal


}
// emptyCart()
emptyCart(){
  this.cart.removeCart()
}


// discount3percent()
discount3percent(){
  this.discount =this.grandTotal *.03
  this.discountTotal -= this.discount
}

// discount10percent()
discount10percent(){
  this.discount =this.grandTotal *.1
  this.discountTotal -= this.discount

}

// discount50percent()
discount50percent(){
  this.discount =this.grandTotal *.5
  this.discountTotal -= this.discount

}

// checkout()
checkout(){
this.checkoutMsg ="Successfully placed your order. Thank you.."
setTimeout(() => {
  this.emptyCart()
 this.router.navigateByUrl('')

}, 5000);
}
}
