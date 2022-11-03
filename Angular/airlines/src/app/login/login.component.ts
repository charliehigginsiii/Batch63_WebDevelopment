import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/login';
import { LoginService } from 'src/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  deleteMessge: any;
  loginack: any;

  //Trigger will happen from the component TS File.
    ngOnInit(): void {
    }
    profileForm = new FormGroup({
 
      id: new FormControl('', [Validators.required, Validators.minLength(0)]),
      dept: new FormControl('', [Validators.required]),
     
     });
     
     
     get f(){
      return this.profileForm.controls;
     }
      user: Login=new Login();
      users: any;
  
      constructor(private loginService: LoginService, private router:Router){}
  
     /* addUser(user:object){
        Object.
        this.signupService.createuserlist(object);
      }*/
      loginUser() {
        this.user.id=this.f['id'].value;         //Angular
        this.user.dept=this.f['dept'].value;
      
        console.log("Charlie",this.user.id);
        console.log("Charlie",this.user.dept);
        console.log(this.profileForm.value)
        //Post Operationwill be executed here
        //if(this.user.id!='' && this.user.dept!=null){
        //this.addUser();
        //here we need to wirte business logic to match the record enter the data which is coming from database
        this.loginService.getuserList()
        .subscribe(data=>
          {this.users=data;
          console.log(this.users)
          for(let i=0; i<data.length; i++){
            console.log(this.users[i].id); //use i instead of 0
            if(this.user.id == this.users[i].id && this.user.dept == this.users[i].dept){
              this.loginack = "Record added successfully";
              this.router.navigate(['/home']);
              break;
            }else{
              this.router.navigate(['']);
            }
        }
          },error=>console.log(error)) ; 
          //now the database record is in the users and data
          //here we have to make the match between this.user.id, this.user.dept with the record coming from the db.
        //}
      
       }   
}