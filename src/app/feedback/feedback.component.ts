import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  std: Student;
  constructor(private stdService: StudentService) {

    this.std = new Student();
  }

  ngOnInit(): void {
  }
  getFeedback()
  {
    this.stdService.postStudentData(this.std).subscribe(dat => { alert('given Successfully!!');
  });
  }
}
