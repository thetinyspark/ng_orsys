import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CatalogService } from './catalog.service';
import { Product } from './entity/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogResolver implements Resolve<Product[]> {

  constructor( private service:CatalogService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    return this.service.getAll();
  }
}
