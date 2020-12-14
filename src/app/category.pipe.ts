import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './entity/product';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(products:Product[], category:string): Product[] {

    if( category === "")
      return products;

    const results:Product[] = [];

    for( let i:number = 0; i < products.length; i++ ){
      if( products[i].category === category ){
        results.push( products[i] );
      }
    }

    return results;
  }

}
