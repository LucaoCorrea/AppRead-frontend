import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../constants/constants';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() != null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    return this.http.post<any>(
      `${apiEndpoint.AuthEndpoint.login}`, {email, password}
    );
  }
}
