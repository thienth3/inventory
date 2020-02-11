import { Component } from '@angular/core';
import { LoadingService } from './core/base/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public loading: LoadingService) {
  }
  title = 'dlaca';
}
