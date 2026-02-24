import {Component , input , output} from '@angular/core'
import {Product} from './product.model'

@Component({
  selector: 'app-product-item',
  templateUrl: './productItem.html',
  styleUrls: ['./app.css'],
  standalone : true
})
export class ProductItemComponent {
  product = input.required<Product>();
  getLikes(){
    this.product().likes += 1;
  }

  delete = output<number>();
  deleteProduct(){
    this.delete.emit(this.product().id);
  }
}
