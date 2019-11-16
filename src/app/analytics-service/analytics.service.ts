import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analytics } from 'src/analytics';
import { catchError } from 'rxjs/operators';
import { searchQuery } from 'src/searchQuery';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private _url: string = "http://34.93.253.53:8099/api/v1/display";
  constructor(private http: HttpClient) { }
  changeURL(url: string) {
    this._url = url;
  }
  getResponses(): Observable<analytics[]> {
    return this.http.get<analytics[]>(this._url).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.message || "Server Error");
      })
    )
  }
  postQuery(query:searchQuery) {
    return this.http.post("http://34.93.253.53:8087/api/v1/analyticsquery",query,httpOptions);
  }
}
