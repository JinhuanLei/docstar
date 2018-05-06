import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UserServiceService} from "./user-service.service";
import { UserpageComponent } from './userpage/userpage.component';
import { UserinferComponent } from './userinfer/userinfer.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { DocumentitemComponent } from './documentitem/documentitem.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserlistComponent } from './userlist/userlist.component';
import { ListItemComponent } from './list-item/list-item.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'userpage', component:  UserpageComponent },
  {path: 'userinfer', component:  UserinferComponent },
  {path: 'adminpage', component:  AdminpageComponent },
  {path: 'documentitem', component:DocumentitemComponent},
  {path: 'userlist', component: UserlistComponent},
  {path:'listitem',component:ListItemComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserpageComponent,
    UserinferComponent,
    AdminpageComponent,
    DocumentitemComponent,
    UserlistComponent,
    ListItemComponent,
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( routes, { useHash : true })
  ],
  providers: [HttpClientModule, UserServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
