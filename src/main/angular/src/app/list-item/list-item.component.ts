import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private userService: UserServiceService) {
    this.validateUser();
    this.loadUsers();
  }

  lid: any;
  suser: any = {"username": ""};
  lists: any;
  documentlistObj:any={reviewer:""};
  ngOnInit() {
    if (sessionStorage.getItem("checkList")) {
      var objstr = sessionStorage.getItem("checkList");
       sessionStorage.removeItem("checkList");
      this.lid = objstr;
    }else {
      this.router.navigateByUrl('adminpage');
    }
    if (this.lid) {
      this.http.get<UserResponse>("/docstar/api/v1/list/" + this.lid).subscribe(
        data => {
          this.documentlistObj=data;
          this.lists = data.documents;
        }
      )
    }
  }

  validateUser() {
    this.http.get<UserResponse>("/docstar/api/v1/user").subscribe(
      data => {
        console.log(data);
        this.suser = data;
        if (data.roles.length > 1) {
          // this.router.navigateByUrl( 'adminpage');
        } else if (data.roles.length == 1 && data.roles[0] == "USER") {
          this.router.navigateByUrl('userpage');
        }
      },
      error => {
        this.router.navigateByUrl('login');
      }
    )
  }

  logout() {
    // var LOGOUT_URL = "http://localhost:3000/wordgame/api/logout/v3";
    var LOGOUT_URL = "/docstar/api/v1/logout";
    this.http.post("/docstar/api/v1/logout", {}).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['login']);
      },
      error => {
        this.router.navigate(['login']);
      }
    )
  }



users:any;
  loadUsers() {
    this.http.get("/docstar/api/v1/users").subscribe(
      data=>{
        this.users=data;
      }
    )
  }
status:any=false;
  reviewer:any="";
  onReviewerChange(event){
    this.reviewer=event;
    this.documentlistObj.reviewer=this.reviewer;
    console.log(this.documentlistObj)
   this.http.put("/docstar/api/v1/list",this.documentlistObj).subscribe(
     data=>{
       console.log(data);
       this.status=true;
     }
   )
  }

  viewDocument(event) {

  }

  deleteDocument(event){
    console.log(event);
    this.lists.forEach(function (value,key,arr) {
      console.log(value.document_number==event)
      if(value.document_number==event){
        arr.splice(key,1)
      }
    })
    this.documentlistObj.documents=this.lists;
    this.http.put<UserResponse>("/docstar/api/v1/list",this.documentlistObj).subscribe(
      data=>{
        this.documentlistObj=data;
        this.lists = data.documents;
      }
    )
  }
}

interface UserResponse {
  roles: string[];
  headers: any;
  results: any;
  documents: any;
  length: any;
}
