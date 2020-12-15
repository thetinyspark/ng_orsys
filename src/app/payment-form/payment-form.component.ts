import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  public paymentForm:FormGroup;
  public phonePattern:RegExp = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/gm;

  constructor(private builder:FormBuilder) { 
    this.paymentForm = this.builder.group({
      firstname: ["", Validators.required], 
      lastname: ["", Validators.required], 
      ship: ["", Validators.required], 
      bill: ["", Validators.required], 
      phone: ["", [Validators.pattern, Validators.required]]
    }); 
  }

  onSubmit(){
    if( this.paymentForm.valid === false ){
      alert("attention, votre formulaire est invalide, veuillez remplir les champs correctement !");
    }
    else{
      // on soumet notre formulaire à un webservice ou alors 
      // on stocke les infos dans un service en particulier 
    }
    
  }

  ngOnInit(): void {
  }

}
