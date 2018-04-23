import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {
  user : any;
  csrf : string;

  constructor() { }

  setUser( user : any ) : void {
    this.user = user;
  }

  setToken( csrf : string ) : void {
    this.csrf = csrf;
  }

  getUser( ) : any {
    return this.user;
  }

  getToken( ) : string {
    return this.csrf;
  }
}
