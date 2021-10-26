import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  basePath = 'http://localhost:3000';
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.basePath}/autenticacion`, user);
  }
  register(user: IUserBody): Observable<any> {
    return this.http.post(`${this.basePath}/usuarios`, user);
  }

  setToken(token: string) {
    this.cookies.set('token', token);
  }
  getToken() {
    return this.cookies.get('token');
  }
  getUser(id: string): Observable<IUserResponse> {
    const headers = {
      Authorization: this.getToken(),
    };
    return this.http.get<IUserResponse>(`${this.basePath}/usuarios/${id}`, {
      headers,
    });
  }

  getUsers(): Observable<IUserResponse[]> {
    const headers = {
      Authorization: this.getToken(),
    };
    return this.http.get<IUserResponse[]>(`${this.basePath}/usuarios`, {
      headers,
    });
  }

  editarUser(userId: string, body: IUserBody): Observable<any> {
    const headers = {
      Authorization: this.getToken(),
    };
    return this.http.put(`${this.basePath}/usuarios/${userId}`, body, {
      headers,
    });
  }

  eliminarUser(userId: string): Observable<any> {
    const headers = {
      Authorization: this.getToken(),
    };
    return this.http.delete(`${this.basePath}/usuarios/${userId}`, {
      headers,
    });
  }
}

interface IUserBody {
  nombre: string;
  username: string;
  email: string;
  password: string;
}

export interface IUserResponse {
  _id: string;
  nombre: string;
  username: string;
  email: string;
  password: string;
}
