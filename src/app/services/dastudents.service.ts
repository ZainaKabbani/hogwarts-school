import { Injectable } from '@angular/core';

import { IDAStudents } from './../interfaces/dastudents';
import { environment } from './../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DAStudentsService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private _http: HttpClient) {}

  getStudents(): Observable<IDAStudents[]> {
    return this._http.get<IDAStudents[]>(
      environment.apiUrl + '/api/v1/student'
    );
  }

  addStudent(student: IDAStudents): Observable<IDAStudents> {
    return this._http.post<IDAStudents>(
      environment.apiUrl + '/api/v1/student',
      student,
      {
        headers: this.headers,
      }
    );
  }

  deleteStudent(id: any): Observable<null> {
    return this._http.delete<null>(
      environment.apiUrl + '/api/v1/student' + '/' + id
    );
  }
}
