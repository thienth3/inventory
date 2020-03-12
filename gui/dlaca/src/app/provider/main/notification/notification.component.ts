import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Notification } from 'src/app/core/services/swagger-api/models/notification.class';
import { NotificationService } from 'src/app/core/services/swagger-api/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})

export class NotificationComponent implements OnInit {
  notifyForm: FormGroup;
  notificationForm: Notification;
  notifys: Notification[];
  hide: boolean;
  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    console.log("1");
    this.notifyForm = this.fb.group({
      title: [''],
      content: [''],
      type: [''],
      status: []

    });

    this.getAll();
  }



  onSubmitNotify() {

    const reminder = {
      title: this.notifyForm.get(['title']).value,
      content: this.notifyForm.get(['content']).value,
      type: this.notifyForm.get(['type']).value,
      status: this.notifyForm.get(['status']).value,
    } as Notification;

    if (reminder.status == "true") {
      reminder.status = "public"
    } else {
      reminder.status = "unPublic"
    }
    this.notificationService.sendNotify(reminder).subscribe(res => {
      this.getAll();
    });
    console.log("1111111", reminder);
  }

  getAll() {
    this.notificationService.getAllNotify().subscribe((res) => {
      this.notifys = res;
    });
  }

  showStatus() {
    this.hide = false;
  }
  unHide() {
    this.hide = true;
  }
}