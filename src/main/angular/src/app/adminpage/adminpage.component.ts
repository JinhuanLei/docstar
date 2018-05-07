import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";
import {UserServiceService} from "../user-service.service";
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],


})

export class AdminpageComponent implements OnInit {

  @Input() documents: any;
  title: string;
  zipcode: string;
  dtype: string="";
  significance: string;
  reviewed: boolean;
  listrows: any;
  user: any = {username: ""};
  rows = [];
  columns = [
    {prop: 'name'}
  ];
  selected = [];
  ducumentList: any = [{_id: ""}];

  constructor(private http: HttpClient, private router: Router, private userService: UserServiceService) {
    this.validateUser();
  }

  ngOnInit() {
    this.loadDocuments();
    this.loadLists();
  }

  validateUser() {
    this.http.get<UserResponse>("/docstar/api/v1/user").subscribe(
      data => {
        console.log(data);
        this.user = data;
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

  getRowHeight(row) {
    return row.height;
  }


  loadLists() {
    this.http.get<UserResponse>("/docstar/api/v1/list").subscribe(
      data => {
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

  viewUser() {
    var uid = this.user._id;
    this.http.get("/docstar/api/v1/" + uid, {}).subscribe(
      data => {
        sessionStorage.setItem("check", JSON.stringify(data));
        this.router.navigate(['userinfer']);
      }
    )

  }

  loadDocuments() {
    this.http.get<UserResponse>("/documents").subscribe(
      data => {
        this.documents = data.results;
        var temparr = [];
        for (var x = 0; x < this.documents.length; x++) {
          var temp = {"id": "" + this.documents[x].document_number, "name": '' + this.documents[x].title};
          temparr.push(temp);
        }
        // console.log(this.rows);
        this.rows = temparr;
      })
  }

  onTypeChange(value: any) {
    this.dtype = value;
    console.log(this.dtype);
  }

  toggleSignificance(event) {
    if (event.target.checked) {
      this.significance = "1"
    } else {
      this.significance = "0"
    }
  }

  toggleReviewed(event) {
    if (event.target.checked) {
      this.reviewed = true;
    } else {
      this.reviewed = false;
    }
  }

  refreshTable() {
    this.loadDocuments();
  }


  resultBoolean:any=false;
  searchDocument() {
    this.resultBoolean=false;
    var search="per_page=50&order=relevance&conditions[term]="+this.title+"&conditions[type][]="+this.dtype+"&conditions[significant]="+this.significance+"&conditions[near][location]="+this.zipcode;
    var query={"query":search};
    console.log(search);
    this.http.get<UserResponse>("/listdocuments/search",{params: query}).subscribe(
      data=>{
        console.log(data);
        this.documents = data.results;
        if(!data.results){
          this.resultBoolean=true;
          return;
        }
        var temparr = [];
        for (var x = 0; x < this.documents.length; x++) {
          var temp = {"id": "" + this.documents[x].document_number, "name": '' + this.documents[x].title};
          temparr.push(temp);
        }
        // console.log(this.rows);
        this.rows = temparr;
      }
    )

  }

  viewDocument(event) {
    var did = event.currentTarget.id;
    this.http.get("/documents/" + did, {}).subscribe(
      data => {
        sessionStorage.setItem("check", JSON.stringify(data));
        this.router.navigate(['documentitem']);
      }
    )

  }

  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  onSelect({selected}) {
    // console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  DocumentSelected = [];

  onDocumentSelect(event) {
    // this.DocumentSelected.splice(0, this.DocumentSelected.length);
    // this.DocumentSelected.push(...DocumentSelected)
    var select = event.selected[0].id;
    console.log(select);
    sessionStorage.setItem("checkList", select);
    this.router.navigate(['listitem']);
  }


  viewUserList() {
    this.router.navigate(['userlist']);
  }

  selectedList: any;

  onListChange(event) {
    this.selectedList = event;
    // console.log(event);
  }

  createLists() {
    // console.log(this.selectedList)
    var str = "";
    this.selected.forEach(function (value, key, arr) {
      if (key != arr.length - 1) {
        str = str + value.id + ","
      } else {
        str = str + value.id
      }

    })
    var resultDocuments = {};
    console.log(str);
    if (this.selected.length > 1) {
      this.http.get<UserResponse>("/listdocuments/" + str).subscribe(
        data => {
          // console.log(data);
          resultDocuments = {"documents": data.results}
          this.ajaxLists(resultDocuments)
          console.log(resultDocuments);
        }
      )
    } else {

      this.http.get<UserResponse>("/documents/" + str).subscribe(
        data => {
          // console.log(data);
          resultDocuments = {"documents": data}
          this.ajaxLists(resultDocuments)
          console.log(resultDocuments);
        }
      )
    }
  }


  ajaxLists(resultDocuments) {
    let head = new HttpHeaders({'Content-Type': 'application/json'});
    if (this.selectedList == "create") {
      console.log('Create');
      this.http.post<UserResponse>("/docstar/api/v1/list", resultDocuments, {headers: head}).subscribe(
        data => {
          console.log(data)
          this.loadLists();
        }
      )

    } else {
      console.log('Update');
      this.http.get<UserResponse>("/docstar/api/v1/list/" + this.selectedList).subscribe(
        data => {
             console.log(data);
            var temp1=data.documents;
            var temp2=temp1.concat(resultDocuments.documents);
            data.documents=temp2;
            // console.log(data);

            this.http.put<UserResponse>("/docstar/api/v1/list",data,{headers: head}).subscribe(
              data=>{
                console.log(data);
              }
            )
        }
      )
    }
  }
}


interface UserResponse {
  roles: string[];
  headers: any;
  results: any;
  documents: any;
  length: any;
}
