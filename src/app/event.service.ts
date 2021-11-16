import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from './evenement';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = "http://localhost:9093/api/events";

  constructor(private httpClient : HttpClient) { }

  getEventsList(): Observable<Evenement[]>
  {

    return this.httpClient.get<Evenement[]>(`${this.baseUrl}`);
    
  }


  getEventById(id : number): Observable<Evenement>
  {
    console.log('dkhal lil service mtaa getById');
    return this.httpClient.get<Evenement>(`${this.baseUrl}/${id}`);
  }

}
