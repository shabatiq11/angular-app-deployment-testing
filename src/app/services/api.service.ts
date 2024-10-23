import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(private http: HttpClient) { }

  getAll(): Observable<T>{

    //if ('caches' in window) {
      // return new Observable<T>((observer) => {
        // caches.open('ngsw:/:1:data:dynamic:fake-api:cache').then(cache => {
          
        // })
      //     //if(cache && Object.entries(cache).length > 0) {
      //       cache.match('https://fakestoreapi.com/products').then(r => {
      //         if (r) {
      //           console.log(r)
      //           r.json().then(data => {
      //             observer.next(data);
      //             observer.complete();
      //           })
      //         }
      //       })
      //     //} else this.http.get<T>('https://fakestoreapi.com/products')
          
      //   })
      // });
    //}
    return this.http.get<T>('https://fakestoreapi.com/products');
  }
}
