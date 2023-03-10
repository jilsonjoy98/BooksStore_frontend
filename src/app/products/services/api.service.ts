import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

// to hold search key from header component
searchKey= new BehaviorSubject('')

  constructor(private http:HttpClient) { 

  }
  

  // all-books api
  getAllBooks(){
   return this.http.get('http://localhost:3000/all-books')
  }

  // view-book api
  viewBook(bookId:any){
  return this.http.get('http://localhost:3000/view-books/'+ bookId)
  }

  // add to wishlist api call
  addtowishlist(book:any){
    return this.http.post('http://localhost:3000/add-to-wishlist',book)
  }

  // get-wishlist api call
getWishlist(){
  return this.http.get('http://localhost:3000/get-wishlist')

}

// remove-item-wishlist/:bookId api call
removeItemFromWishlist(bookId:any){
  return this.http.delete('http://localhost:3000/remove-item-wishlist/'+bookId)

}

}
