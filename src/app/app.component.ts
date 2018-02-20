import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hola Bienvenidos Al mundo De la Programacion</h1>
    <app-header></app-header>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  tittle = 'app';
}
