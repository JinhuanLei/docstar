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
  }

  ngOnInit() {
    if (sessionStorage.getItem("checkList")) {
      var objstr = sessionStorage.getItem("checkList");
      console.log(objstr);
      sessionStorage.removeItem("checkList");
      this.http.get<UserResponse>("/docstar/api/v1/list/" + objstr).subscribe(
        data => {
       this.lists=data.documents;
        }
      )

    }
  }

  suser: any = {"username": ""};
  lists: any;

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

  loadList() {
    this.http.get("/docstar/api/v1/list/").subscribe(
      data => {

      }
    )
  }

  viewDocument(event) {

  }
}

interface UserResponse {
  roles: string[];
  headers: any;
  results: any;
  documents: any;
  length: any;
}
