import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productlist:any;
  types:string[]=[
    "All",
    "Electronics",
    "Cosmetics",
    "Books",
    "Groceries"

  ]
  selected:string="All"
  minvalue=500;
  maxvalue=1000;
  
  
    constructor(private cs:ProductService){
      this.cs.getProducts().subscribe(
        {
        next: (data:any)=>this.productlist=data,
        error: ()=> this.productlist=[]
        }
      )

      

    }
    
}
