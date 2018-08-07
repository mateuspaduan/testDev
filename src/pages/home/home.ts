import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ProductServiceProvider } from './../../providers/product-service/product-service';
import { DataProvider } from './../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  public products: any;
  data: any;

  items: any;

  result: any;

  searchTerm: string = '';

  pageSize: any = 5;

  constructor(public navCtrl: NavController, 
              public httpClient: HttpClient, 
              public productService: ProductServiceProvider,
              public dataFilter: DataProvider) {

    this.getProds();
  }

  ionViewDidLoad() {
    
    this.setFilteredItems();
  }

  getProds() {
    let data: Observable<any>;
    data = this.httpClient.get('https://test-dev-ammo.herokuapp.com/tasks');
    data.subscribe(result => {
      this.products = result;
    })
  }

  setFilteredItems() {

    if(this.searchTerm == ''){

      this.getProds();
    }

    else {

      let data: Observable<any>;
      //getting data to filter list
      data = this.httpClient.get('https://test-dev-ammo.herokuapp.com/tasks/'+this.searchTerm);
      data.subscribe(result => {
        this.products = result;
      })
    }
  }
}
