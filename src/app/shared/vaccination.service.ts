import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Person } from "./person";
import { Place } from "./place";
import { Vaccination } from "./vaccination";

@Injectable()
export class VaccinationService {
  private api = "https://kwmcorana.s1810456024.student.kwmhgb.at/api";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Vaccination>> {
    return this.http
      .get(`${this.api}/vaccinations`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getSingle(code: string): Observable<Vaccination> {
    return this.http
      .get<Vaccination>(`${this.api}/vaccinations/${code}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
      
  }
  create(vaccination: Vaccination): Observable<any> {
    return this.http
      .post(`${this.api}/vaccination`, vaccination)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  update(vaccination: Vaccination): Observable<any> {
    return this.http
      .put(`${this.api}/vaccination/${vaccination.code}`, vaccination)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }
  remove(code: string): Observable<any> {
    return this.http
      .delete(`${this.api}/vaccination/${code}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }
  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
