import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartItemArray:any =[]
  cartItemList =new BehaviorSubject([]) 

  constructor() { }

addToCart(book:any){
this.cartItemArray.push(book)
this.cartItemList.next(this.cartItemArray)
console.log(this.cartItemList);
this.grandTotal()
}

// grandTotal
grandTotal(){
  let total =0
  this.cartItemArray.map((item:any)=>{
    total += item.price
    console.log(total);
    
  })
  return total
}
// remove a item from cart
removeCartItem(book:any){
this.cartItemArray.map((item:any,index:any)=>{
  if(book.id == item.id){
    this.cartItemArray.splice(index,1)
  }
})

this.cartItemList.next(this.cartItemArray)
}

// removeCart
removeCart(){
  this.cartItemArray =[]
  this.cartItemList.next(this.cartItemArray)
}

}
