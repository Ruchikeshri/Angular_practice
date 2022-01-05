import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from '../../service/student.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  std: Student;
  StdList:Student[] = [];
  constructor(private stdService: StudentService, private route: Router ) {

   }

 ngOnInit(): void
 {
 //  this.stdService.getStudentData().subscribe(resp =>{
 //    this.StdList = resp;
 //  })

     this.stdService.getStudentData().
     subscribe(data => {this.std = data
    });
   }

  deleteRecord(id){
   this.stdService.deleteStudent(id).subscribe(resp =>{
     alert('Data Deleted');
      this.ngOnInit()
  });


  }


}
