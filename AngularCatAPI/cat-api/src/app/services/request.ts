import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Request {
  private http = inject(HttpClient);

  data: any;

  getData( apiUrl: string ): Observable<any>{
    return this.http.get(apiUrl, {
      headers: {
        'x-api-key': 'live_ifuwVaQcMuGS4GmRQ8Qci5yorxmPZhDbkQc7hCzwPaBtxaXC1QzZ7OF4YFAM1NR6'
      }
    });
  }
}

