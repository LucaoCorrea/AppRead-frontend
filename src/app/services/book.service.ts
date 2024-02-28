import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoint } from '../constants/constants';
import { Observable } from 'rxjs';
import {BookResponse} from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<BookResponse> {
    return this.http.get<BookResponse>(
      `${apiEndpoint.BookEndpoint.getAllBooks}`
    );
  }

  getBooksBySearch(
    name: string
  ): Observable<BookResponse> {
    return this.http.get<BookResponse>(
      `${apiEndpoint.BookEndpoint.getBookBySearch}?name=${name}`
    );
  }

  getIdBook(
    id: number
  ): Observable<BookResponse> {
    return this.http.get<BookResponse>(
      `${apiEndpoint.BookEndpoint.getIdBook}?id=${id}`
    );
  }
}
