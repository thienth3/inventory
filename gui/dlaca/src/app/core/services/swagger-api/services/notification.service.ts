import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification } from '../models/notification.class';
import { Observable } from 'rxjs';
import { API_HOST_DEV } from 'src/app/app.const';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private http: HttpClient
  ) { }

  sendNotify(reminder: Notification): Observable<any> {
    return this.http.post(API_HOST_DEV + '/notification/create', reminder);
  }

  getAllNotify(): Observable<Notification[]> {
    return this.http.get<Notification[]>(API_HOST_DEV + '/notification')
  }

}
