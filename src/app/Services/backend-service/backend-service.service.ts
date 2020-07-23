import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  public getDemoData(userID: number) {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users/' + userID.toString())
  }
}
