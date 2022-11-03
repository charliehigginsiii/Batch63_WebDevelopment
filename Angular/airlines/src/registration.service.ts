import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
    private baseUrl = 'http://localhost:9070';
  

    constructor(private http:HttpClient) { }

    //connect to the server and get the data from the server  object
    //CRUD service
    //connect point to the server and UI

    //we need to define method to post the data
    //Post the data to the server

    createuserlist(user: object): Observable<object> {
      console.log("success");
      return this.http.post(`${this.baseUrl}` + '/api/employee/addemployee', user);
    }
 
}
