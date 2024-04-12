import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
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
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { FormComponent } from './form/form.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurentDashComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    AfterlogindefComponent,
    CakeComponent,
    C1Component,
    C2Component,
    C3Component,
    WeddingComponent,
    W1Component,
    W2Component,
    W3Component,
    PhotographyComponent,
    P1Component,
    P2Component,
    P3Component,
    FormComponent,
    LandingComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
