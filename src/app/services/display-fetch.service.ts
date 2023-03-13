import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisplayFetchService {
  private url = 'https://takuara.com.ar/backend/imgArray.php';
  constructor(private http: HttpClient) {}

  performGetEx(): Observable<any> {
    return this.http.get(this.url);
  }
}
