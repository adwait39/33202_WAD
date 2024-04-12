import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

    signupForm!: FormGroup
    constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router) 
    { }
  
    ngOnInit(): void 
    {
      this.signupForm = this.formbuilder.group({
        name:[''],
        email:[''],
        address:[''],
        mobile: [''],
        eventName: [''],
        eventVenue: [''],
        eventDate: [''],
        eventTypeCake: [''],
        eventTypeWedding: [''],
        eventTypeHallBooking: ['']
      })
    }
  
    signUp()
    {
      this._http.post<any>('http://localhost:3000/eventsdata',this.signupForm.value).subscribe(res=>{
        console.log(res)
        alert('Registered Successfully');
        this.signupForm.reset();
        this._router.navigate(['/landing']);
      }), (err: any)=>{
        console.log(err);
        alert('Signup Error');
      }
    }
  
  

}
