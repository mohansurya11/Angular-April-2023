import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';
@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(products: any, minvalue: string, maxvalue:string): any {
    return products.filter((x:any)=>(parseInt(x.price)<=parseInt(maxvalue) && parseInt(x.price)>=parseInt(minvalue)))
  }
  

}
