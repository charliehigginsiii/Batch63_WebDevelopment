import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { Employee } from 'src/employee';
import { EmployeeService } from 'src/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  deleteMessge: any;

//Trigger will happen from the component TS File.
  ngOnInit(): void {
  }
    user: Employee=new Employee();
    users: any;

    constructor(private employeeService: EmployeeService){}

   /* addUser(user:object){
      Object.
      this.signupService.createuserlist(object);
    }*/
    readUser(){
      
        this.employeeService.getuserList().subscribe((data: any) => {
          console.log(data);
          this.users = data;
        });
      }
      deleteUser(id: number) {
        this.employeeService.deleteuserList(id)
          .subscribe(
            (      data: any) => {
              console.log(data);
              this.deleteMessge=true;
              this.employeeService.getuserList().subscribe(data =>{
                this.users =data
                })
            },
            (      error: any) => console.log(error));
       }
       info = [1,2,3,4,5];
       info4= [
        {
          item: "banana",
          rec:"600",
        },
        {
          item: "apple",
          rec:"1000",
        },
        {
          item: "lemon",
          rec:"2000",
        }
      ] ;
      num=5;
      
      }
   
  


