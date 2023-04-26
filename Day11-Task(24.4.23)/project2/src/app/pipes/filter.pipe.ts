import { Pipe, PipeTransform } from '@angular/core';
import { ProductService } from '../services/product.service';
// import { PlacesService } from '../services/places.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  products:any=[]
  constructor(private ps:ProductService){
    console.log("running")
     this.ps.getProducts().subscribe(
      {next: (products:any)=>this.products=products,
      error: ()=> this.products =[]}
     )
  }
  transform(target: any, param:string): any {
    
  
     return this.products.filter((x:any)=> x.name.toLowerCase().startsWith(param.toLowerCase())) ;
  }

}
