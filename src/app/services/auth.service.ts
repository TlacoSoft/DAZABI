import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Registro } from '../models/registro';
import { Up } from '../models/up';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // URL = 'https://apidazabi.azurewebsites.net/users';
  // URL = 'http://localhost:3000';
  //URL = 'http://dazabi.azurewebsites.net';
  URL = 'https://dazabi-nodejs.azurewebsites.net';
  login(login: Login): Observable<Request> {
    return this.http.post<Request>(
      `${this.URL}/users/login`, login
    );
  }

  registro(registro: Registro): Observable<Request>{
    return this.http.post<Request>(
      `${this.URL}/users/create`, registro
    );
  }

  update(id: number, up: Up){
    return this.http.put(
      `${this.URL}/users/${id}`, up
    );
  }

  recompensa(): Observable<Request>{
    return this.http.get<Request>(`${this.URL}/recompensas/get`
    );
  }

  puntos(id: any): Observable<Request>{
    return this.http.get<Request>(`${this.URL}/puntos/${id}`
    );
  }

  recompensasID(id:any): Observable<Request>{
    return this.http.get<Request>(`${this.URL}/recompensas/get/${id}`
    );
  }

  historialID(id:any): Observable<Request>{
    return this.http.get<Request>(`${this.URL}/historial/get/${id}`
    );
  }

  recompensasCountID(id:any): Observable<Request>{
    return this.http.get<Request>(`${this.URL}/recompensas/count/${id}`
    );
  }


}
