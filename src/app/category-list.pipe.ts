import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './entity/product';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {

  transform(products:Product[]): any[] {
    const results:any[] = []; 

    results.push(
      {
        label: "Tout", 
        value: ""
      }
    );

    const categories:string[] = [];
    for( let i:number = 0; i < products.length; i++ ){

      if( categories.indexOf(products[i].category) === -1 ){
        categories.push(products[i].category);
        results.push(
          {
            label: products[i].category , 
            value: products[i].category
          }
        );
      }
      
    }

    return results;
  }

}
