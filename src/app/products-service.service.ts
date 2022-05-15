import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  constructor(private http: HttpClient) { }
  getProductsList(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  getProductDetails(id){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
