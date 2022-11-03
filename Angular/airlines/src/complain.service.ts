import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  private baseUrl = 'http://localhost:9070';
 

  constructor(private http:HttpClient) { }

  //connect to the server and get the data from the server  object
  //CRUD service
  //connect point to the server and UI

  //we need to define method to post the data
  //Post the data to the server

  createuserlist(user: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}` + '/api/complain/addcomplain', user);
  }

  //Read Operation
  getuserList(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + '/api/complain/getcomplain');  //will change

  }

  deleteuserList(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}` + `/api/employee/deleteEmployeeById/`+ `${id}`, {responseType: 'text'});  //will change
 
  }
 
}
