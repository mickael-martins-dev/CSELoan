import { Component } from '@angular/core';
import { BackendService } from './services/backend/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngClient';

  constructor(private backendService: BackendService) {}
}
