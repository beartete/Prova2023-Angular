import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  url = "http://localhost:3000/empresas"
  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.url);
  }

  save(empresa: Empresa):Observable<Empresa>{
    return this.http.post<Empresa>(this.url, empresa);
  }

}
