import { Injectable } from '@angular/core';

import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NameApiService {

  constructor(private http:HttpClient) { }




  getDatas(){


    return this.http.get('https://uinames.com/api/?ext')

  }
}
