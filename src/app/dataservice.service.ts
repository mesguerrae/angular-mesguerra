import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


  public getComments(): Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`);
    
  }

  public getPosts(): Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
    
  }

  public getPostById(pId:number): Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${pId}`);
  }

  public getPostComments(pId:number): Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${pId}/comments`);
  }



}