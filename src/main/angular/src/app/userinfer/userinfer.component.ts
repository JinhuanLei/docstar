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
  user:any={_id:"",password:"",email:"",roles:[""]};
  disableCondition:any=false;
  invalid3:any=0;
  invalid4:any=0;
  CurrentUser:any;
  checkMode:any=false;
  ngOnInit() {
    this.checkMode=false;
    console.log(sessionStorage.getItem("check"));
    if(sessionStorage.getItem("check")){
      this.checkMode=true;
      var objstr=sessionStorage.getItem("check");
      var obj=JSON.parse(objstr);
      this.user=obj;
      if(this.CurrentUser._id==this.user._id){
        this.disableCondition=true;
      }
      console.log(this.user);
      sessionStorage.removeItem("check");
    }
  }
  validateUser(){
    this.http.get<UserResponse>( "/docstar/api/v1/user").subscribe(
      data => {

        this.CurrentUser=data;
        if(data.roles.length>1){
          // this.router.navigateByUrl( 'adminpage');
        }else if(data.roles.length==1&&data.roles[0]=="USER"){
          // this.router.navigateByUrl( 'userpage');
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
        // console.log(data);
        this.router.navigate(['login']);
      },
      error => {
        this.router.navigate(['login']);
      }
    )
  }


  backToMainPage(){
    // if(this.checkMode){
    //   this.router.navigate(['userlist']);
    // }else if(this.CurrentUser.roles.length>1){
    //   this.router.navigate(['adminpage']);
    // }else{
    //   this.router.navigate(['userpage']);
    // }

    if(this.CurrentUser.roles.length>1){
      this.router.navigate(['adminpage']);
    }else{
      this.router.navigate(['userpage']);
    }

  }

  updateUser(){
    delete this.user.authorities;
    console.log(this.user);
     this.http.put<UserResponse>("/docstar/api/v1/"+this.user._id,this.user).subscribe(
  data =>{
    this.user=data;
     console.log(data);
    // if(data.roles.length==2){
    //   this.router.navigate(['adminpage']);
    // }else{
    //   this.router.navigate(['userpage']);
    // }
  }
)
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
