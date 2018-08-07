import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {

  apiUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log('Hello ProductServiceProvider Provider');
  }

  getProducts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/tasks').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
