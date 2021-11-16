import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from './commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private baseUrl = "http://localhost:9093//api/commentaire";

  constructor(private httpClient : HttpClient) { }

  createComment(commentaire : Commentaire) : Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, commentaire);
  }
}
