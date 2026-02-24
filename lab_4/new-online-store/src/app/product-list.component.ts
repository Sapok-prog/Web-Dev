import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl : './app.css'
})
export class ProductListComponent {
  Products: Product[] = [
    {
      id: 1,
      name: "Смарт-часы Apple Watch Series",
      description: "11 S/M 42 мм розовое золото-розовый",
      price: "196 632 ₸",
      rating: 5,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pe5/p89/66311545.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pc9/p89/66311544.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p56/p8a/66311549.png?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/pc2/p8c/66311550.png?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/pfa/p8c/66311552.png?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/p32/p8d/66311554.png?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/apple-watch-series-11-s-m-42-mm-rozovoe-zoloto-rozovyi-146092607/?c=750000000",
      image: "",
      selectedIndex: 0
    },
    {
      id: 2,
      name: "Смартфон Samsung Galaxy Z Flip7 FE 5G",
      description: "8 ГБ/256 ГБ белый",
      price: "494 490 ₸",
      rating: 4.5,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pcd/p19/53124317.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p95/p19/53124319.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p0c/p17/53124321.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pf0/p16/53124322.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb8/p16/53124324.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p63/p16/53124327.png?format=gallery-medium"
      ],
      link: "https://l.kaspi.kz/shop/ySYh6mzDxt3oSVE",
      image: "",
      selectedIndex: 0
    },
    {
      id: 3,
      name: "Серьги SOKOLOV 92021177",
      description: "вес 2.13 г серебро, фианит, топаз",
      price: "16 023 ₸",
      rating: 5,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h97/ha3/64240637280286.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h4e/h28/64240640262174.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/he0/h44/64240644161566.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h60/hba/64240648552478.jpg?format=gallery-medium"
      ],
      link: "https://l.kaspi.kz/shop/Dz2REcTyfqgDNFg",
      image: "",
      selectedIndex: 0
    },
    {
      id: 4,
      name: "Игровое кресло SF-GC02",
      description: "белый, розовый",
      price: "84 926 ₸",
      rating: 5,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h9c/h4d/86142480678942.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h39/hdc/86142480744478.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h0c/h50/86142480810014.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h0c/h50/86142480810014.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h18/h9a/86142480941086.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h3f/h69/86142481006622.jpg?format=gallery-large"
      ],
      link: "https://l.kaspi.kz/shop/FAqC4MhJzdjPEzS",
      image: "",
      selectedIndex: 0
    },
    {
      id: 5,
      name: "Sony ZV-E10 II kit 16-50mm II",
      description: "беззеркальный фотоаппарат с высоким разрешением",
      price: "642 471 ₸",
      rating: 5,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hf5/hb5/86931495944222.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h37/hcf/86931496009758.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hdc/h57/86931496075294.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2f/h6e/86931496140830.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h15/h8d/86931496206366.jpg?format=gallery-medium"
      ],
      link: "https://l.kaspi.kz/shop/GjFfHDU4ySGUB5n",
      image: "",
      selectedIndex: 0
    },
    {
      id: 6,
      name: "Худи светло-серый",
      description: "Неутепленная модель",
      price: "8 500 ₸",
      rating: 4.8,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p13/p12/78019618.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p92/p60/78019620.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p65/p67/78019622.jpeg?format=gallery-medium"
      ],
      link: "",
      image: "",
      selectedIndex: 0
    },
    {
      id: 7,
      name: "Сумка кросс-боди Tommy Hilfiger",
      description: "полиэстер белый",
      price: "38 000 ₸",
      rating: 4,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pc6/paf/54640703.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p8d/paf/54640705.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p55/paf/54640707.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p1d/paf/54640709.jpg?format=gallery-medium"
      ],
      link: "https://l.kaspi.kz/shop/BDYjgnK3gvjZwTo",
      image: "",
      selectedIndex: 0
    },
    {
      id: 8,
      name: "Mishki.kz Клубника в шоколаде 30×10 см",
      description: "30 сочных ягод клубники, покрытых нежным шоколадом",
      price: "6 990 ₸",
      rating: 4.8,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p14/pc0/79345792.jpeg?format=gallery-medium",
        "https://cdn-sh1.vigbo.com/shops/176751/products/21826118/images/3-8c884baa5210dc3ff821473879c258b3.jpg",
        "https://sedobnyebukety.ru/wp-content/uploads/2024/05/1-9.jpg"
      ],
      link: "https://l.kaspi.kz/shop/HY3jT5cHUmdU7ha",
      image: "",
      selectedIndex: 0
    },
    {
      id: 9,
      name: "Термокружка Stanley LoveShackFancy",
      description: "1.18 л розовый-бежевый",
      price: "10 000 ₸",
      rating: 5,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p21/p9e/77864170.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p4d/p97/77864172.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb3/p92/81650398.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p1c/p96/81650399.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p9e/p6d/81650401.jpeg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/termokruzhka-stanley-loveshackfancy-1-18-l-rozovyi-bezhevyi-149547312/?c=750000000",
      image: "",
      selectedIndex: 0
    },
    {
      id: 10,
      name: "Кроссовки New Balance W237",
      description: "розовый, серый",
      price: "67 190 ₸",
      rating: 5,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p67/p5a/60425697.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p9f/p5a/60425699.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p44/pa5/60425705.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb4/pa5/60425709.jpg?format=gallery-medium"
      ],
      link: "https://l.kaspi.kz/shop/BDYjgnK3gvjZwTo",
      image: "",
      selectedIndex: 0
    }
  ];

  nextImage(product: Product) {
    product.selectedIndex =
      (product.selectedIndex + 1) % product.images.length;
  }

  prevImage(product: Product) {
    product.selectedIndex =
      (product.selectedIndex - 1 + product.images.length) %
      product.images.length;
  }

  shareWhatsApp(product : Product) {

    const message = `Check out this product: ${product.link}`;
    const encodedMessage = encodeURIComponent(message);

    const url = `https://wa.me/?text=${encodedMessage}`;

    window.open(url, '_blank');
  }

  shareTelegram(product : Product) {

    const encodedUrl = encodeURIComponent(product.link);
    const encodedText = encodeURIComponent(product.name);

    const url = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;

    window.open(url, '_blank');
  }
}

