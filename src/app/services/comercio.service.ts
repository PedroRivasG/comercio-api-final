import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ComercioService {
  basePath = 'http://localhost:3000';
  constructor(private http: HttpClient, private cookies: CookieService) {}

  getToken() {
    return this.cookies.get('token');
  }
  getComercio(id: string): Observable<IComercioResponse> {
    const headers = {
      Authorization: this.getToken(),
    };
    return this.http.get<IComercioResponse>(
      `${this.basePath}/comercios/${id}`,
      {
        headers,
      }
    );
  }

  getComercios(): Observable<IComercioResponse[]> {
    const headers = {
      Authorization: this.getToken(),
    };
    return this.http.get<IComercioResponse[]>(`${this.basePath}/comercios`, {
      headers,
    });
  }
  registrar(body: IComercioBody): Observable<any> {
    const headers = {
      Authorization: this.getToken(),
    };
    return this.http.post(`${this.basePath}/comercios`, body, {
      headers,
    });
  }

  editar(comercioId: string, body: IComercioBody): Observable<any> {
    const headers = {
      Authorization: this.getToken(),
    };
    return this.http.put(`${this.basePath}/comercios/${comercioId}`, body, {
      headers,
    });
  }

  eliminar(comercioId: string): Observable<any> {
    const headers = {
      Authorization: this.getToken(),
    };
    return this.http.delete(`${this.basePath}/comercios/${comercioId}`, {
      headers,
    });
  }
}

interface IComercioBody {
  latitud: string;
  longitud: string;
  nombre: string;
  nombrePropietario: string;
  telefono: string;
  categoria: string;
  descripcion: string;
  direccion: string;
}

export interface IComercioResponse {
  _id: string;
  latitud: string;
  longitud: string;
  nombre: string;
  nombrePropietario: string;
  telefono: string;
  categoria: string;
  descripcion: string;
  direccion: string;
}
