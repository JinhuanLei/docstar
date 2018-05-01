import { Component, OnInit, Input, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() username : string;
  @Input() password : string;
  // LOGIN_URL : string ="/login"
  LOGIN_URL : string ="/docstar/api/v1/login"
  invalid1:any=0;
  invalid2:any=0;
  invalid5:any=0;
  constructor(private http : HttpClient, private router : Router, private userService : UserServiceService ) { }


  ngOnInit() {
    this.username = "kenny";
    this.password = "123";
    this.validateUser();

  }
  validateUser(){
    this.http.get<UserResponse>( "/docstar/api/v1/user").subscribe(
      data => {
        console.log(data);
        if(data.roles.length>1){
          this.router.navigateByUrl( 'adminpage');
        }else if(data.roles.length==1&&data.roles[0]=="USER"){
          this.router.navigateByUrl( 'userpage');
        }
      },
      error=>{

      }
    )
  }
  csrf:any;
  login() {
    this.invalid1=0;
    this.invalid2=0;
    this.invalid5=0;
    var credentials = JSON.parse( JSON.stringify( {username:this.username,password:this.password} ) );
    let head = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<UserResponse>( this.LOGIN_URL, credentials, {headers : head} )
      // .map( res => {
      //   this.csrf=res.headers.get('CSRF-Token') ;
      //   this.userService.setToken( res.headers.get('CSRF-Token') );
      //   sessionStorage.setItem("csrf", this.csrf);
      //   console.log(this.csrf);
      //   return res.body;
      //
      // })
      .subscribe(
        (data) => {
          // console.log(data);

          this.userService.setUser( data );
          sessionStorage.setItem("user", JSON.stringify(data));
          if(data.roles.length>1){
            this.router.navigateByUrl( 'adminpage');
          }else if(data.roles.length==1&&data.roles[0]=="USER"){
            this.router.navigateByUrl( 'userpage');
          }

        },
        error=>{
          console.log(error);
          if(error.error=="Forbidden"){
            this.invalid1=1;
          }else if(error.error=="Disabled"){
            this.invalid5=1;
          }else{
            this.invalid1=1;
          }
        }
      );
  }

}

interface UserResponse {
  roles: string[];
  headers:any;
}


