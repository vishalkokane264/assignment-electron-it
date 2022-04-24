import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/utils/global.url';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  getAllUsers(page = 2): Observable<any> {
    let params = new HttpParams().set('page', page.toString());
    return this.apiService.callGetApi(GlobalUrl.user, params);
  }
  addUser(data: any): Observable<any> {
    return this.apiService.callPostApi(GlobalUrl.user, data);
  }

  deleteUser(id = 2): Observable<any> {
    let params = new HttpParams().set('id', id.toString());
    return this.apiService.callDeleteApi(GlobalUrl.deleteByUserId, params);
  }
}
