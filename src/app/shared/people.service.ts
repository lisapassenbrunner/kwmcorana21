import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Person } from './person';

@Injectable()
export class PeopleService {

 private api = "https://kwmcorana.s1810456024.student.kwmhgb.at/api";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Person>> {
    return this.http
      .get(`${this.api}/registrations`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

   update(person: Person): Observable<any> {
    return this.http
      .put(`${this.api}/registrations/${person.id}`, person)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

}