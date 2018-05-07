import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {readTsconfig} from "@angular/cli/utilities/read-tsconfig";

@Component({
  selector: 'app-documentitem',
  templateUrl: './documentitem.component.html',
  styleUrls: ['./documentitem.component.css']
})
export class DocumentitemComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private userService: UserServiceService) {
    this.validateUser();
  }

  user: any = {username: ""};
  review: any;
  ifAdmin: any = false;

  validateUser() {
    this.http.get<UserResponse>("/docstar/api/v1/user").subscribe(
      data => {
        console.log(data);
        this.user = data;
        if (data.roles.length > 1) {
          // this.router.navigateByUrl( 'adminpage');
          this.ifAdmin = true;
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

  viewUser() {
    var uid = this.user._id;
    this.http.get("/docstar/api/v1/" + uid, {}).subscribe(
      data => {
        this.router.navigate(['userinfer']);
      }
    )

  }

  document: any;
  lists: any;

  ngOnInit() {
    this.document = JSON.parse(sessionStorage.getItem('doc'));
    this.lists = JSON.parse(sessionStorage.getItem('lists'));
  }

  onReviewChange(event) {
    this.review = event;
    var did=this.document.document_number;
    console.log(event);
    this.lists.documents.forEach(function (value,key,arr) {
      if(value.document_number==did){
      value.review=event;
      }
    })

    this.http.put("/docstar/api/v1/list",this,this.lists).subscribe(
      data=>{
        console.log(data);
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
