import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Infomation } from '../models/infomation.class';
import { MOCK_API } from 'src/app/app.const';
import { Managess } from '../models/managess.class';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManageesService {

  constructor(
    private http: HttpClient
  ) { }



  getInfo(): Observable<Infomation> {
    return this.http.get<Infomation>(MOCK_API + '/infomation/1');
    
  }

  getAllManager(): Observable<Managess[]> {
    return this.http.get<Managess[]>(MOCK_API + '/manager')
  }

  getAllManagees(): Observable<Managess[]> {
    return this.http.get<Managess[]>(MOCK_API + '/managees')
  }

}
