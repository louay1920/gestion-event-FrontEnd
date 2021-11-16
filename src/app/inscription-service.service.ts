import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscription } from './inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionServiceService {

  private baseUrl = "http://localhost:9093//api/inscription"

  constructor(private httpClient : HttpClient) { }


  createInscription(inscription : Inscription): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, inscription);
  }
}
