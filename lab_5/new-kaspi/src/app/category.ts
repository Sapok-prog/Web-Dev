import {Component} from '@angular/core';
import {ProductList} from './product.list';

@Component({
  selector: 'app-category',
  templateUrl: './category.html',
  styleUrls: ['./app.css'],
  imports: [
    ProductList
  ]
})
export class CategoryComponent {
  categoryID : number = 1;
  select(categoryID : number) {
    this.categoryID = categoryID;
  }
}
