import { Component } from '@angular/core';

import { ButtonsModule } from 'ngx-bootstrap/buttons'; 
import { AlertModule } from 'ngx-bootstrap/alert'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; 
import {ReactiveFormsModule} from '@angular/forms'; 
// import classes which are required for reactive forms 
import {FormBuilder,Validators} from '@angular/forms';

import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [RouterLink,ButtonsModule,AlertModule,BsDropdownModule,ReactiveFormsModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css',
  providers : [FormBuilder,Validators] 
})
export class Form1Component {

  constructor(public fbobj : FormBuilder) 
{ 
} 

  public Form1 = this.fbobj.group( 
    { 
      // Add Multiple validations 
      firstname: ['', [Validators.required, Validators.minLength(5),Validators.pattern(/^[A-Za-z]+$/)]], 
      lastname :['', [Validators.required, Validators.minLength(5),Validators.pattern(/^[A-Za-z]+$/)] ], 
      password: [Validators.required, Validators.minLength(8)],
      confirmpassword:[Validators.required, Validators.minLength(8)],
      email : ['',Validators.required,Validators.pattern('^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$')], 
      phone : ['',Validators.required,Validators.minLength(10),
      Validators.maxLength(10),Validators.pattern('^[0-9]+$')],
      Address : ['',Validators.required],
      city : ['',Validators.required],
      zip: ['', Validators.required, Validators.minLength(5),Validators.maxLength(5)],
      state: [''],
      Comments:['',Validators.required, Validators.minLength(30)]
    } 
  );

}
