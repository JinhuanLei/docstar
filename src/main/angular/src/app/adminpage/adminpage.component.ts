import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  @Input() documents : any;
  title:string;
  zipcode:string;
  dtype:string;
  selectedType:string;
  significance:string;
  reviewed:boolean;
  constructor(private http : HttpClient, private router : Router, private userService : UserServiceService ) { }


  ngOnInit() {
    this.validateUser();

  }

  onTypeChange(value: any){
    this.selectedType=value;
    console.log(this.selectedType);
  }

  toggleSignificance(event){
    if ( event.target.checked ) {
      this.significance="1"
    }else{
      this.significance="0"
    }
  }
  toggleReviewed(event){
    if ( event.target.checked ) {
      this.reviewed=true;
    }else{
      this.reviewed=false;
    }
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
        this.router.navigateByUrl( 'login');
      }
    )
  }
  refreshTable(){
    this.retrieveUsers();
  }
  retrieveUsers(){
    // this.filter='';
    // this.http.get("/wordgame/api/admins/v3/users").subscribe(
    //   data => {
    //     console.log("users:"+data);
    //     this.users = data;
    //   }
    // );
  }
  searchDocument() {
    // var search={"search":this.filter};
    // console.log(search);
    // this.http.post("/wordgame/api/admins/v3/search",search).subscribe(
    //   data => {
    //     console.log("users:"+data);
    //     this.users = data;
    //   }
    // );
    // this.filter = '';
  }
  viewDocument(event){
    // if(event=="create"){
    //   this.router.navigate(['createuser']);
    // }else{
    //   // console.log("row id:"+event.target)
    //   var uid=event.currentTarget.id;
    //
    //   this.http.get( "/wordgame/api/admins/v3/"+uid,{} ).subscribe(
    //     data => {
    //       sessionStorage.setItem("check",JSON.stringify(data));
    //       this.router.navigate(['useritem']);
    //     }
    //   )
    //
    // }
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


}
interface UserResponse {
  roles: string[];
  headers:any;
}
