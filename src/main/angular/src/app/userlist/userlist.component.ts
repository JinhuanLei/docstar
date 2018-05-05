import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


  constructor(private http : HttpClient, private router : Router, private userService : UserServiceService ) { }
  @Input() users : any;
  filter : string;
  email: any;
  suser:any
  ngOnInit() {
    this.validateUser();
this.retrieveUsers();
  }
  validateUser(){
    this.http.get<UserResponse>( "/docstar/api/v1/user").subscribe(
      data => {
        this.suser=data;
        console.log(data);
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
  retrieveUsers(){
    this.filter='';
    this.http.get("/docstar/api/v1/users").subscribe(
      data => {
        console.log("users:"+data);
        this.users = data;
      }
    );
  }

  refreshTable(){
    this.retrieveUsers();
  }


  viewUser(event){
    // if(event=="create"){
    //   this.router.navigate(['createuser']);
    // }else{
      // console.log("row id:"+event.target)
      var uid=event.currentTarget.id;

      this.http.get( "/docstar/api/v1/"+uid,{} ).subscribe(
        data => {
          sessionStorage.setItem("check",JSON.stringify(data));
          this.router.navigate(['userinfer']);
        }
      )

    }
  // }


}
interface UserResponse {
  id: string;
  roles: string[];
  headers:any;
  results:any;
}
