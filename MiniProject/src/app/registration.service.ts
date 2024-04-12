import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post<any>('http://localhost:3000/signup', userData);
  }
}
