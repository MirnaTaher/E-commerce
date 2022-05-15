import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Products';
  faCoffee=faCoffee;
}
