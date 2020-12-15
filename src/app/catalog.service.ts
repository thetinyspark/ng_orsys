import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Product } from './entity/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor( private client:HttpClient) { }

  public getAll():Observable<Product[]>{
    // ici on fait en sorte d'appeler la méthode "get" de notre service de type HttpClient. 
    // cette méthode, comme son nom l'indique, effectue une requête avec le verbe HTTP GET vers l'url 
    // mentionnée en paramètre. 

    // Par défaut, cette méthode retourne donc un gestionnaire de données (nommé Observable) qui nous promet 
    // de nous retourner une donnée de type "any" (çàd n'importe quel type de données). Et c'est normal, 
    // le framwork n'a aucune possibilité de deviner l'utilisation que vous allez faire de ces données, il ne choisit 
    // donc pas pour vous, de type de données particulier. 

    // Si toutefois, comme ici, vous avez besoin que le résultat de votre requête soit converti en un type de données 
    // précis, vous avez deux solutions: 
    // Soit créer une operatorFunction et forcer l'interprétation de votre any en votre type à vous 
    // (solution non retenue ici car plus longue et développé dans la deuxième méthode). 

    // La deuxième solution est de laisser Angular faire ce travail là pour vous en précisant 
    // le type de données dans laquel vous souhaitez convertir votre réponse de type any. Pour ça 
    // on emploie la syntaxe des generics (çàd <mon_type_de_donnees>).
    return this.client.get<Product[]>( environment.catalogUrl );
  }

  public getById(id:number):Observable<Product | null>{
    

    // Ici, on a un besoin précis, qui est de retourner un produit par le biais de son id. 
    // on n'a pas accès à une url précise qui ferait le travail de filtrage pour nous, on va donc 
    // aller chercher l'ensemble des produits et effectuer le filtre nous même. 

    // Pour cela, on réutilise notre méthode getAll, qui nous renvoie un Observable<Product[]>. 
    // Si on était en fin de chaîne d'exploitation de la donnée (çàd, si on n'avait pas besoin de renvoyer
    // une donnée quelconque) alors, on pourrait se contenter de faire un subscribe, donc de déclencher 
    // toute la mécanique et d'exploiter la donnée. 

    // Toutefois ici, on doit renvoyer une donnée, on doit donc déclencher l'observable de tableau de produit
    // renvoyé par getAll et lui adjoindre une fonction de traitement (celle qui nous permet de faire le filtre)
    // le résultat final issu de cet appel à getAll + filtre, sera renvoyé à l'utilisateur, sous la forme d'un 
    // Observable d'un seul produit (donc Observable<Product>). 

    // Pour ce faire, on emploie l'opérateur pipe, qui nous permet de lier un Observable à autre chose; 
    // et l'opérateur map qui nous permet de créer une fonction de traitement compatible avec un Observable. 
    // On "fusionne" les deux et cela nous renvoie un Observable qui nous promet une donnée du même type 
    // que celle qui est renvoyée par le filtre. 
    return this.getAll().pipe( 

      map(
        (products:Product[]):Product | null => {

          for( let i:number = 0; i < products.length; i++ ){
            const current = products[i]; 
            if( current.id === id ){
              return current;
            }
          }

          return null;
        }
      )
    );

  }
}
