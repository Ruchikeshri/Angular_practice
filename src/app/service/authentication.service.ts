import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public users=[];
  constructor() {
    this.users =[
      {
          name:'admin',
          password:'pass'
      },
      {
        name : 'user1',
        password:  'pass1'
      }

      ];
  }
  authenticate(user){
    let token ;
    let foundUser = this.users.find(u=>
      u.name === user.name
      && u.password === user.password
    )
    if(foundUser){
      token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    return token;
  }
  storeToken(token){
   localStorage.setItem('token',token);

  }
  getToken(){

    return localStorage.getItem('token');
  }
  isAuthenticated(){
    if(this.getToken()){
      return true;
    }
    else{
      return false;
    }
}
}
