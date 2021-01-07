import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Book} from '../../model/book';
import {HttpClient, HttpClientModule} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }


  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(API_URL + '/books');
  }

  getBookById(id: number): Observable<Book>{
    return this.http.get<Book>(API_URL + `/books/${id}`);
  }
  editBook(id: number, book: Book): Observable<Book>{
    return this.http.put<Book>(API_URL + `/books/${id}`, book);
  }
  deleteBook(id: number): Observable<Book>{
    return this.http.delete<Book>(API_URL + `/books/${id}`);
  }
  createBook(book: Book): Observable<Book>{
    return this.http.post<Book>(API_URL + `/books`, book);
  }

}
