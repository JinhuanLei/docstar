import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-userinfer',
  templateUrl: './userinfer.component.html',
  styleUrls: ['./userinfer.component.css']
})
export class UserinferComponent implements OnInit {
  constructor(private http : HttpClient, private router : Router, private userService : UserServiceService ) {
    this.validateUser();
  }
  user:any;
  disableType:any=false;
  disableEnabled:any=false;
  ngOnInit() {

  }
  validateUser(){
    this.http.get<UserResponse>( "/docstar/api/v1/user").subscribe(
      data => {
        console.log(data);
        this.user=data;
        if(data.roles.length>1){
          // this.router.navigateByUrl( 'adminpage');
        }else if(data.roles.length==1&&data.roles[0]=="USER"){
          this.router.navigateByUrl( 'userpage');
        }
      },
      error=>{
        this.router.navigateByUrl( 'login');
      }
    )
  }
  logout() {
    // var LOGOUT_URL = "http://localhost:3000/wordgame/api/logout/v3";
    var LOGOUT_URL = "/docstar/api/v1/logout";
    this.http.post("/docstar/api/v1/logout", {} ).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['login']);
      },
      error => {
        this.router.navigate(['login']);
      }
    )
  }


  backToMainPage(){
    this.router.navigate(['adminpage']);
  }
  toggleEnabled(event){
    if ( event.target.checked ) {
      this.user.enabled=true;
    }else{
      this.user.enabled=false;
    }
  }
  toggleAdmin(event){
    if ( event.target.checked ) {
      this.user.roles=["ADMIN","USER"];
    }else{
      this.user.roles=["USER"];
    }
  }
  toggleUser(event){
    if ( event.target.checked ) {
      this.user.roles=["USER"];
    }
  }
}
interface UserResponse {
  roles: string[];
  headers:any;
  results:any;
}
