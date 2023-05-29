import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'https://restcountries.com/v3.1';
  private fields = 'ccn3,flags,capital,name,population,cca2';

  get httpParams() {
    return new HttpParams().set('fields', this.fields);
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(catchError((err) => of([])));
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(catchError((err) => of([])));
  }

  buscarPaisPorRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;

    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(catchError((err) => of([])));
  }

  getPaisPorCodigo(codigo: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${codigo}`;

    return this.http.get<Country>(url).pipe(catchError((err) => of()));
  }
}
