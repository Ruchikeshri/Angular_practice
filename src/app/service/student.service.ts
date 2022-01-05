import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from '../model/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  std: Student;
  constructor(private http: HttpClient) {

   }


 // getStudentData():Observable<Student[]>{
   // return this.http.get<Student[]>('http://localhost:3000/students');
 // }

getStudentData() :Observable<any>
{
  return this.http.get<any>('http://localhost:3000/students');
}
  deleteStudent(val):Observable<any>{
  return this.http.delete(`http://localhost:3000/students/${val}`);
  }

  postStudentData(val): Observable<any>{
    return  this.http.post('http://localhost:3000/students',val)
  }


  getById(val):Observable<any>{
    return this.http.get(`http://localhost:3000/students/${val}`)
  }

  updateData(val):Observable<any>{
    return this.http.put(`http://localhost:3000/students/${val.id}`,val);
  }
  //getRegistered(val1):Observable<any>{
  //  return this.http.post('http://localhost:3000/students/',val1);
 // }

}
