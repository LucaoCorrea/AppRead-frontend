import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../constants/constants';
import { Injectable, inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly TOKEN = 'token';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private router = inject(Router);
  private http = inject(HttpClient);
  


  setToken(token: string): void {
     localStorage.setItem(this.TOKEN, token);  
    
  }
  getToken():string | null{
    return localStorage.getItem(this.TOKEN);
  }


  isLoggedIn() {
    return !!localStorage.getItem(this.TOKEN);
  }

  logout() {
    localStorage.removeItem(this.TOKEN);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  isTokenExpired() {
    const tokens = localStorage.getItem(this.TOKEN);
    if (!tokens) return true;
    const token = JSON.parse(tokens).access_token;
    const decoded = jwtDecode(token);
    if (!decoded.exp) return true;
    const expirationDate = decoded.exp * 1000;
    const now = new Date().getTime();

    return expirationDate < now;
  }

  private doLoginUser(email: string, token: any) {
    this.loggedUser = email;
    this.storeJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  private storeJwtToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }

  login(user: { email: string; password: string }): Observable<any> {
    console.log();
    return this.http
      .post( `${apiEndpoint.AuthEndpoint.login}`, user)
      .pipe(
        tap((tokens: any) =>
          this.doLoginUser(user.email, JSON.stringify(tokens))
        )
      );
  }
}
