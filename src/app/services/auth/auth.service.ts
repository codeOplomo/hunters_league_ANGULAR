import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterVM } from '../../services/auth/vm/register-vm.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
                     
  private apiUrl = 'http://localhost:8080/api/auth';
  private tokenKey = 'auth_token'; // Key for storing token in localStorage

  constructor(private http: HttpClient) {}

  register(registerData: RegisterVM): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/register`, registerData, {headers});
  }

  isLoggedIn(): boolean {
    // Check if the token exists and is not expired
    const token = localStorage.getItem(this.tokenKey);
    return !!token; // Returns true if token exists, false otherwise
  }

  login(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
