import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {


bookId:any;
viewBook:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService, private cart:CartService){

  }
   ngOnInit(): void {
    // fetchpathparameter from url
     this.activatedRoute.params
     .subscribe((data:any)=>{
      console.log(data['id']);
      this.bookId=data['id']
     })

    //  to get details of requested product
    this.api.viewBook(this.bookId)
    .subscribe((result:any)=>{
      console.log(result.book);
      this.viewBook=result.book
    })
   }

// addwishlist(viewBook)
addtowishlist(book:any){
  this.api.addtowishlist(book)
  .subscribe(
    (result:any)=>{
    alert(result.message)
  },
  (result:any)=>{
    alert(result.error.message)
  }
  )

}

// addToCart(viewBook)
addToCart(book:any){
this.cart.addToCart(book)
}


}
