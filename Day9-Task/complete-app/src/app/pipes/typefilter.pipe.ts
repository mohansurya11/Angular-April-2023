import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typefilter'
})
export class TypefilterPipe implements PipeTransform {

  transform(feedbacklist: any, type: string): any {
    if(type=="All")
       return feedbacklist;

    return feedbacklist.filter((x:any)=>x.type == type)
  }

}
