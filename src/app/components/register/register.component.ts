import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  std: Student
  constructor(private stdService: StudentService) {
    this.std = new Student();
   }

  ngOnInit() {
    //this.stdService.getRegistered().subscribe(data)
  }
userRegistrationForm = new FormGroup({
name: new FormControl('',Validators.required),
email: new FormControl(''),
contact: new FormControl(''),
password: new FormControl(''),
city: new FormControl('')
});

getRegistered()
{
  this.stdService.postStudentData(this.std).subscribe(dat => { alert('Registered Successfully!!');
});
}
onSubmit()
{
  console.warn(this.userRegistrationForm.value);

}
}
