import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";
import {UserServiceService} from "../user-service.service";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],


})

export class AdminpageComponent implements OnInit {

  @Input() documents : any;
  title:string;
  zipcode:string;
  dtype:string;
  significance:string;
  reviewed:boolean;
  user:any={username:""};
  rows = [

  ];
  columns = [
    { prop: 'name' }
  ];
  selected = [];
  constructor(private http : HttpClient, private router : Router, private userService : UserServiceService ) {
    this.validateUser();
  }
  ngOnInit() {

    this.loadDocuments();
  }


loadDocuments(){
    this.http.get<UserResponse>("/documents").subscribe(
      data=>{
      this.documents=data.results;
      var temparr=[];
      for(var x=0;x<this.documents.length;x++){
        var temp={"id":""+this.documents[x].document_number,"name":''+this.documents[x].title};
        temparr.push(temp);
      }
      // console.log(this.rows);
      this.rows=temparr;
    })
}



  onTypeChange(value: any){
    this.dtype=value;
    console.log(this.dtype);
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
  refreshTable(){
    this.retrieveDocuments();
  }
  retrieveDocuments(){
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

      var did=event.currentTarget.id;
      this.http.get( "/documents/"+did,{} ).subscribe(
        data => {
          sessionStorage.setItem("check",JSON.stringify(data));
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
  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  viewUserList(){
    this.router.navigate(['userlist']);
  }
}
interface UserResponse {
  roles: string[];
  headers:any;
  results:any;
}
