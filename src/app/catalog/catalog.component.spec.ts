import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogService } from '../catalog.service';
import { configModule } from '../config.spec';
import * as mock from "../../assets/catalog.json";
import { CatalogComponent } from './catalog.component';
import { of } from 'rxjs';
import { Product } from '../entity/product';

describe('CatalogComponent', () => {
  let service:CatalogService;
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(configModule)
    .compileComponents();

   
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit( 
    'should display products', 
    () => {

      // service = TestBed.inject(CatalogService);
      // spyOn(service, "getAll").and.returnValue( 
      //   of(mock as Product[])
      // ); 

      console.log(fixture.componentInstance.data);

      const compiled = fixture.nativeElement;
      // expect(compiled.textContent).toContain(mock[0].name);
    }
  )


});
