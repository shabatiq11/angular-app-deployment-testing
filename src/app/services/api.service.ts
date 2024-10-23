import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(private http: HttpClient) { }

  getAll(): Observable<T>{
    if ('caches' in window) {

    //   console.log('CACH API ENABLED IN BROWSER');
    //   caches.open('ngsw:/:1:data:dynamic:mission-api:cache').then(cache => {
    //     cache.match('https://fakestoreapi.com/products').then(res => {
    //       return res
    //     })
    //   });
    // }
    // return this.http.get<T>('https://fakestoreapi.com/products')

    //if ('caches' in window) {
    //   return new Observable<T>((observer) => {
    //     caches.open('ngsw:/:1:data:dynamic:fake-api:cache').then(cache => {
    //       cache.match('https://fakestoreapi.com/products').then(response => {
    //         if (response) {
    //           response.json().then(data => {
    //             // Emit cached data
    //             observer.next(data);
    //             observer.complete();
    //           })
    //         }
    //       })
    //     });
    //   });
    // } else {
      // If Cache API is not available, fall back to HTTP request
    }
    return this.http.get<T>('https://fakestoreapi.com/products');
  }
}
