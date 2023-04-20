import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productlist:any;
    constructor(private cs:ProductService){
      this.cs.getProducts().subscribe(
        {
        next: (data:any)=>this.productlist=data,
        error: ()=> this.productlist=[]
        }
      )

    }
}
