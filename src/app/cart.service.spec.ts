import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Product } from './entity/product';

describe(
  'CartService test suite',
  () => {

    let service: CartService;

    beforeEach(

      () => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CartService);
      }

    );

    fit(
      'should be created',
      () => {
        expect(service).toBeTruthy();
      }
    );


    fit( 
      'should retrieve all products', 
      () => {

        const product:Product = {
          category: "book", 
          id: 1, 
          img: "coucou.png", 
          name: "Un bouquin qui dit coucou", 
          price: 10
        };

        const product2:Product = {
          category: "book", 
          id: 2, 
          img: "coucou.png", 
          name: "Un bouquin qui dit coucou", 
          price: 10
        };

        service.add( product ); 
        service.add( product2 ); 
        
        expect( service.getAll().length ).toBe(2);
        expect( service.getAll().indexOf(product) ).toBeGreaterThan(-1);
        expect( service.getAll().indexOf(product2) ).toBeGreaterThan(-1);
      }
    )

    fit( 
      'should insert a product', 
      () => {
        service.add( 
          {
            category: "book", 
            id: 1, 
            img: "coucou.png", 
            name: "Un bouquin qui dit coucou", 
            price: 10
          }
        ); 

        expect( service.getAll().length ).toBe(1);
      }
    )

    fit( 
      'should remove a product', 
      () => {

        const product:Product = {
          category: "book", 
          id: 1, 
          img: "coucou.png", 
          name: "Un bouquin qui dit coucou", 
          price: 10
        };

        service.add( product ); 
        service.remove( product );
        expect( service.getAll().length ).toBe(0);
      }
    )



  }
);
