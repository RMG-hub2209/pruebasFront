import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class GenIpServiceService {

  private ipBack;

  constructor(
    private http: HttpClient) {
      this.ipBack = environment.pruebaBack;
  }

  genIp(string: any): Observable<any>{
    console.log(string);
    return this.http.post<any>(this.ipBack, string);
  }
}
