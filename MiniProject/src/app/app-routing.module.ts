import { NgModule, ɵɵstylePropInterpolate1 } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AfterlogindefComponent } from './afterlogindef/afterlogindef.component';
import { CakeComponent } from './cake/cake.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { WeddingComponent } from './wedding/wedding.component';
import { W1Component } from './w1/w1.component';
import { W2Component } from './w2/w2.component';
import { W3Component } from './w3/w3.component';
import { PhotographyComponent } from './photography/photography.component';
import { P3Component } from './p3/p3.component';
import { P2Component } from './p2/p2.component';
import { P1Component } from './p1/p1.component';
import { FormComponent } from './form/form.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '', component:HomepageComponent
  },

  {
    path:'landing', component:LandingComponent
  },

  {
    path:'form' , component:FormComponent
  },
  
  {
    path:'c1', component:C1Component
  },
  {
    path:'c2', component:C2Component
  },

  {
    path:'c3', component:C3Component
  },
  {
    path:'photography', component:PhotographyComponent
  },

  {
    path:'p1', component:P1Component
  },

  {
    path:'p2', component:P2Component
  },

  {
    path:'p3', component:P3Component
  },



  {
    path: 'cake', component:CakeComponent
  },

  {
    path:'wedding',component:WeddingComponent
  },

  {
    path:'w1',component:W1Component
  },

  {
    path:'w2',component:W2Component
  },

  {
    path:'w3',component:W3Component
  },

  {
    path: 'afterlogindef', component: AfterlogindefComponent
   },

  {
   path: 'login', component: LoginComponent 
  },

 {
   path: 'signup', component: SignupComponent 
 }, 
 
 {
   path:'restaurent' , component: RestaurentDashComponent
 },
 {
  path: 'homepage', component:HomepageComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
