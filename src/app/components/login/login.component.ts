import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';

import { AuthenticationService } from 'src/app/service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  std: Student

   constructor(private router: Router, private authenticate : AuthenticationService) { }
   userLoginForm = new FormGroup({
    name: new FormControl('',Validators.required),
     password: new FormControl('')

    });

  ngOnInit(): void {
  }



    onSubmit(user){

      console.log(this.userLoginForm);
      let token = this.authenticate.authenticate(user);
      console.log(token);
      if(token){
        this.authenticate.storeToken(token);
        this.router.navigate(['/dashboard']);
      }
      else{
        this.router.navigate(['/login']);
      }


    }


}
