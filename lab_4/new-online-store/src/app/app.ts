
import { Component } from '@angular/core';
import { ProductListComponent } from './product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [ProductListComponent]
})
export class App {}
