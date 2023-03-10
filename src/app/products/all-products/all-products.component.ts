import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  books:any=[]
  searchItem:string=""
  constructor(private api :ApiService){

  }

ngOnInit(): void {
this.api.getAllBooks()
.subscribe((result:any)=>{
  this.books =result.books
  console.log(this.books);

})
this.api.searchKey
.subscribe((result:any)=>{
    console.log(result);
    this.searchItem =result
    
  }
)
  
}

}
