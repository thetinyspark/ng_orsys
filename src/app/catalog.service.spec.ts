import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CatalogService } from './catalog.service';
import * as mock from "../assets/catalog.json";
import { Product } from './entity/product';
import { HttpClientModule } from '@angular/common/http';
import { configModule } from './config.spec';

describe('CatalogService', () => {
  let service: CatalogService;



  beforeEach(() => {
    TestBed.configureTestingModule(configModule);
    service = TestBed.inject(CatalogService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit( 
    'should return a product by its id ', 
    () => {
      spyOn(service, "getAll").and.returnValue( 
        of(mock as Product[])
      ); 

      service.getById(mock[0].id).subscribe( 
        (product:Product | null ) => {
          if( product )
            expect( product).toBe(mock[0]);
        }
      )
    }
  )
});
