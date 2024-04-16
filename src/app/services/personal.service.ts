import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }

  private API_PERSONAL = "http://localhost:3000/personal"

  postPersonal(persona: any): Observable<any>{
    return this.http.post(this.API_PERSONAL, persona)
  }
}
