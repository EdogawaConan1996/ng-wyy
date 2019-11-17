import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from './services.module';
import {Observable} from 'rxjs';

import { Banner } from './data-types/common.types';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';


@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private baseUrl: string) { }

  getBanners(): Observable<Banner[]> {
    return this.http.get(`${this.baseUrl}banner`)
      .pipe(map((res: {banners: Banner[]}) => res.banners));
  }
}
