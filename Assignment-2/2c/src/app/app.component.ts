import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AlertModule } from 'ngx-bootstrap/alert'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; 
import {ReactiveFormsModule} from '@angular/forms'; 
// import classes which are required for reactive forms 
import {FormBuilder,Validators} from '@angular/forms' 

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,Form2Component,CommonModule, RouterOutlet,Form1Component,ButtonsModule,AlertModule,BsDropdownModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [FormBuilder,Validators] 
})
export class AppComponent {
  title = 'Forms';

  constructor(public fbobj : FormBuilder) 
  { 
  } 

  Form2 = this.fbobj.group( 
    { 
      Username: ['', [Validators.required, Validators.minLength(5),Validators.pattern(/^[A-Za-z]+$/)]], 
      password:  [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^[A-Za-z]+$/)
      ]
    } 
  );
}
