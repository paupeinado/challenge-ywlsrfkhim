import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  // Base url
  baseurl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // LIST - Get a list of Post
  ListPost(): Observable<Post> {
    return this.http.get<Post>(this.baseurl)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // SHOW - Get the Post ;id
  GetPost(id): Observable<Post> {
    return this.http.get<Post>(this.baseurl + '/' + id)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // POST - Create a new Post
  CreatePost(data): Observable<Post> {
    return this.http.post<Post>(this.baseurl + '/', JSON.stringify(data), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // PUT - Edit the Post :id
  UpdatePost(id, data): Observable<Post> {
    return this.http.put<Post>(this.baseurl + '/' + id, JSON.stringify(data), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // DELETE - Remove the Post :id
  DeletePost(id) {
    return this.http.delete<Post>(this.baseurl + '/' + id, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
