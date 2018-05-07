import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private userService: UserServiceService) {
    this.validateUser();

  }
   ifAdmin:any=false;
  user: any={username:""};
  title:any;
  zipcode:any;
  resultBoolean: any = false;
  listrows: any;
  DocumentSelected = [];

  ngOnInit() {

  }

  validateUser() {
    this.http.get<UserResponse>("/docstar/api/v1/user").subscribe(
      data => {
        console.log(data);
        this.user = data;
        if (data.roles.length > 1) {
          // this.router.navigateByUrl( 'adminpage');
          this.ifAdmin=true;
        } else if (data.roles.length == 1 && data.roles[0] == "USER") {
          this.router.navigateByUrl('userpage');
        }
        this.loadReviewedList();
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

  viewUser() {
    var uid = this.user._id;
    this.http.get("/docstar/api/v1/" + uid, {}).subscribe(
      data => {
        sessionStorage.setItem("check", JSON.stringify(data));
        this.router.navigate(['userinfer']);
      }
    )

  }

  onDocumentSelect(event) {
    // this.DocumentSelected.splice(0, this.DocumentSelected.length);
    // this.DocumentSelected.push(...DocumentSelected)
    var select = event.selected[0].id;
    console.log(select);
    sessionStorage.setItem("checkList", select);
    this.router.navigate(['listitem']);
  }

  dtype: any;

  onTypeChange(value: any) {
    this.dtype = value;
    console.log(this.dtype);
  }

  significance: any;

  toggleSignificance(event) {
    if (event.target.checked) {
      this.significance = "1"
    } else {
      this.significance = "0"
    }
  }

  reviewed: any;

  toggleReviewed(event) {
    if (event.target.checked) {
      this.reviewed = true;
    } else {
      this.reviewed = false;
    }
  }

  refreshTable() {

  }

  ducumentList:any;
  loadReviewedList() {
    // console.log(this.user);
    var p={"reviewer":this.user._id}
    this.http.get<UserResponse>("/docstar/api/v1/list/reviewer",{params: p}).subscribe(
   data=>{
     this.ducumentList = data;
     var tempArr = [];
     for (var x = 0; x < data.length; x++) {
       var temp = {"id": "" + data[x]._id}
       tempArr.push(temp);
     }
     this.listrows = tempArr;
     console.log(this.listrows);
   }
    )
  }

  searchDocument() {

  }

  viewDocument(lid,did){
    console.log("lid"+lid+"did"+did);
this.http.get<UserResponse>("/docstar/api/v1/list/"+lid).subscribe(
  data=>{
    data.documents.forEach(function (value,key,arr) {
      if(value.document_number==did){
        sessionStorage.setItem("doc", JSON.stringify(value));
        sessionStorage.setItem("lists", JSON.stringify(data));
      }
    })
    this.router.navigate(['documentitem']);
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
