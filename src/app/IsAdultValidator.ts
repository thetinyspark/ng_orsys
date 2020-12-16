import { Directive, forwardRef } from "@angular/core";
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl, NG_VALIDATORS, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
@Directive({
    selector: '[isAdult][ngModel],[isAdult][formControl]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => IsAdultValidator), multi:
                true
        }
    ]
})
export class IsAdultValidator implements AsyncValidator {
    constructor() { }
    validate(control: AbstractControl):Observable<ValidationErrors | null> {

        const value:number = parseInt(control.value); 

        if( value < 18 )
            return of({isAdult: true});
        else
            return of(null);

        // return new Observable(observer => {
        //     if ( value < 18) {
        //         console.log("error");
                
        //         observer.next({ isAdult: true });
        //     } else {
        //         console.log('ok');
                
        //         observer.next(null);
        //     }
        // });
    }
}