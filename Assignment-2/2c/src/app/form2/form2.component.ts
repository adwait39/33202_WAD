import { Component } from '@angular/core';

import { ButtonsModule } from 'ngx-bootstrap/buttons'; 
import { AlertModule } from 'ngx-bootstrap/alert'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; 
import {ReactiveFormsModule} from '@angular/forms'; 
// import classes which are required for reactive forms 
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [ButtonsModule,AlertModule,BsDropdownModule,ReactiveFormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css',
  providers:[FormBuilder,Validators]
})
export class Form2Component {

  constructor(public fbobj : FormBuilder) 
  { 
  } 
  
    Form1 = this.fbobj.group( 
      { 
        // Add Multiple validations 
        firstname: ['', [Validators.required, Validators.minLength(5),Validators.pattern(/^[A-Za-z]+$/)]], 
        Password :['', [Validators.required, Validators.minLength(5),Validators.pattern(/^[A-Za-z]+$/)] ], 

      } 
    );

}
