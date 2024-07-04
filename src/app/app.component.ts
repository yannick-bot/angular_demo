import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BookComponent } from './book/book.component';

@Component({
  selector: 'app-root', //permet d'attribuer un nom de balise à votre composant
  standalone: true,
  imports: [BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_demo';
}
