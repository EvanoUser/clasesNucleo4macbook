import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {

  constructor(private http: HttpClient){}

  private API_PERSONAL="http://localhost:3000/personal"
  //leer
  getPersonal():Observable<any>{
    return(this.http.get(this.API_PERSONAL))
  }

  //guardar
  postPersonal(persona: any): Observable<any>{
    return this.http.post(this.API_PERSONAL, persona)
  }

}
