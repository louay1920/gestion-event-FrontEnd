import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluation } from './evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private baseUrl = "http://localhost:9093//api/evaluation";

  constructor(private httpClient : HttpClient) { }
  CreateEvaluation(evaluation : Evaluation) : Observable<Object>
  {
    return this.httpClient.post(`${this.baseUrl}`, evaluation);
  }
}
