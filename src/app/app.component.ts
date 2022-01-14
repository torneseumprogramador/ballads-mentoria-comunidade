import { Component } from '@angular/core';
import { Menu } from './services/menu';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = Menu.list();
  constructor() {}
}
