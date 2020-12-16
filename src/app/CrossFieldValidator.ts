import { FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { first } from "rxjs/operators";

export function crossFieldValidator (control:FormGroup):ValidationErrors | null {
    const lastname = control.get("lastname");
    const firstname = control.get("firstname");

    if( lastname && firstname && ( lastname.value === firstname.value )){
        return null;
    }
    else{
        return {same:true};
    }
};