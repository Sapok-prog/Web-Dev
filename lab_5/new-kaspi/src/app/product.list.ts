import {Component , input} from '@angular/core';
import {Product} from './product.model';
import {CommonModule} from '@angular/common';
import {ProductItemComponent} from './product.item';

@Component({
  selector: 'app-product-list',
  templateUrl: './productList.html',
  styleUrls: ['./app.css'],
  imports: [CommonModule, ProductItemComponent],
  standalone : true
})
export class ProductList {
  Products: Product[] = [{
    id: 1,
    name: "Внешторг Фарма Vito Plus Магний В6",
    description: "таблетки 30 шт",
    price: "1 230 ₸",
    rating: 5,
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h96/h52/64353329414174.jpg?format=gallery-medium"],
    link: "https://l.kaspi.kz/shop/6HxUeBuVneTjdDE",
    selectedIndex: 0,
    categoryId: 3,
    likes: 41
  },
    {
      id: 2,
      name: "ORZAX Proceive F Комплекс для женского здоровья",
      description: "инозитол саше 30 шт",
      price: "14 390 ₸",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/pf8/p49/68892832.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h63/h27/85428824473630.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h49/h46/85428824539166.png?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/7GBAH6RHMvYHEav",
      selectedIndex: 0,
      categoryId: 3,
      likes: 112
    },{
      id: 3,
      name: "NOW Omega-3 + Vitamin D3 5000 МЕ",
      description: "капсулы 220 шт",
      price: "14 000 ₸",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p9d/pad/46644869.png?format=gallery-medium" , "https://resources.cdn-kaspi.kz/img/m/p/p31/pab/46644870.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/p0d/p2f/82542844.jpeg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/2wExVodwVVMzZNq",
      selectedIndex: 0,
      categoryId: 3,
      likes: 703
    },{
      id: 4,
      name: "NOW Витамин А Vitamin A 10000 IU",
      description: "капсулы 100 шт",
      price: "3 299 ₸",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/pf6/p58/27487094.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p12/p59/27487095.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p2e/p59/27487096.jpg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/4onFr6TH9m5Qqov",
      selectedIndex: 0,
      categoryId: 3,
      likes: 0
    },{
      id: 5,
      name: "ORZAX Ocean Fish Oil Рыбий жир Омега 3",
      description: "Апельсин сироп 150",
      price: "5 498 ₸",
      rating: 4.9,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/pa5/pa9/64974919.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p16/p44/69523483.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/p32/p44/69523484.jpg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/CZbBaNvWpJY7u3x",
      selectedIndex: 0,
      categoryId: 3,
      likes: 501
    },{
      id: 6,
      name: "",
      description: "",
      price: "",
      rating: 0,
      images: [],
      link: "",
      selectedIndex: 0,
      categoryId: 0,
      likes: 0
    },{
      id: 7,
      name: "Детский кокон Фабрика Облаков Зевушка 43x70x20 см",
      description: "беспружинный, хлопок",
      price: "48 000 ₸",
      rating: 4.9,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/pc5/p4f/27304436.jpg?format=gallery-medium" , "https://resources.cdn-kaspi.kz/img/m/p/pfe/p4f/27304438.jpg?format=gallery-medium" , "https://resources.cdn-kaspi.kz/img/m/p/p1a/p50/27304439.jpg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/F5MnUZub9u6osYh",
      selectedIndex: 0,
      categoryId: 2,
      likes: 158
    },{
      id: 8,
      name: "Бутылочка Philips Avent SCY900/01",
      description: "125 мл прозрачный",
      price: "4 989 ₸",
      rating: 4.9,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/h01/h0d/86223975645214.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h61/h8b/86223975710750.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h1a/h6c/86223975743518.jpg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/2YUUXLBq23uH3rP",
      selectedIndex: 0,
      categoryId: 2,
      likes: 436
    },{
      id: 9,
      name: "Детское сиденье-лестница со стулом",
      description: "2 в 1 teplyeokna",
      price: "16 500 ₸",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p81/pfc/13762096.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p9d/pfc/13762097.jpg?format=gallery-medium" , "https://resources.cdn-kaspi.kz/img/m/p/pb9/pfc/13762098.png?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/EvwTfnPHM62voCc",
      selectedIndex: 0,
      categoryId: 2,
      likes: 33
    },{
      id: 10,
      name: "Масло Bubchen 200 мл",
      description: "Масло, обогащённое экстрактом календулы",
      price: "3 378 ₸",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p2d/p94/78738770.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p11/p94/78738771.jpg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/9Lui2KX7BqLWSSE",
      selectedIndex: 0,
      categoryId: 2,
      likes: 15
    },{
      id: 11,
      name: "Молокоотсос электрический NYRA",
      description: "MY-382 Premium",
      price: "39 990 ₸",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p91/p10/103894296.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/pad/p10/103894297.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/pb3/pdc/92857565.jpg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/4bX8QCTLNNoSiH4",
      selectedIndex: 0,
      categoryId: 2,
      likes: 25
    },{
      id: 12,
      name: "Обувница MEISHI 100x30x50 см",
      description: "МДФ",
      price: "33 583 ₸",
      rating: 4.4,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/hea/h60/84923734491166.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/pa4/p0e/78514786.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/pc0/p0e/78514787.png?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/AaFAi5zD49kYD8F",
      selectedIndex: 0,
      categoryId: 4,
      likes: 273
    },{
      id: 13,
      name: "Диван ARIBA Bruno 3П-3П, 310х130 см",
      description: "обивка ткань, бежевый",
      price: "578 000 ₸",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p6d/pe1/18928563.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p89/pe1/18928564.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p51/pe1/18928562.jpg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/AckRCtbDTPipg5J",
      selectedIndex: 0,
      categoryId: 4,
      likes: 2
    },{
      id: 14,
      name: "Futuka kids Future растущая парта, 75x72x105 см",
      description: "розовый",
      price: "54 980 ₸",
      rating: 4.9,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p1a/pe2/56124655.jpeg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/pb0/pde/56124656.jpeg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p47/pdb/56124657.jpeg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/DJ8RavYqfvgvxVb",
      selectedIndex: 0,
      categoryId: 4,
      likes: 42
    },{
      id: 15,
      name: "Комплект KAGU-SHOP ALFA, стол 180х90 см + 8 стульев",
      description: "белый, темно-коричневый",
      price: "308 048 ₸",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p78/pec/82298978.jpeg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/pe2/pef/82298979.jpeg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p08/pc5/82298980.jpeg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/58N6J5dmH5KTA31",
      selectedIndex: 0,
      categoryId: 4,
      likes: 11
    },{
      id: 16,
      name: "Книга Ульева Е.: Обучение в сказках. Развитие речи.",
      description: "Большая книга развития речи. 1-2 года",
      price: "1 800 ₸",
      rating: 4.9,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p20/p73/27578487.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p04/p73/27578488.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/pe8/p72/27578489.jpg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/8krsFzLWnzotg9J",
      selectedIndex: 0,
      categoryId: 1,
      likes: 26
    },{
      id: 17,
      name: "Книга Мұртаза Ш.: Қызыл жебе. 2-кітап",
      description: "Шерхан Мұртазаның тарихи негізде жазылған еңбек",
      price: "2 750 ₸",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/h7d/hda/64241770037278.jpg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/3WhqBgqb7teFRwV",
      selectedIndex: 0,
      categoryId: 1,
      likes: 18
    },{
      id: 18,
      name: "Книга Роулинг Д.: Гарри Поттер",
      description: "комплект из 7-ми в переводе издательства Росмэн",
      price: "32 859 ₸",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/p8c/pc3/23746269.jpg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/387e328FreJd81R",
      selectedIndex: 0,
      categoryId: 1,
      likes: 57
    },{
      id: 19,
      name: "Книга Хирш А., Ренцетти Р.: Гравити Фолз. Дневник 3",
      description: "",
      price: "13 500 ₸",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/h2f/hab/85729081786398.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/ha2/h3e/63802231324702.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hdd/hb2/85729081819166.jpg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/CWvYrdn6sTJkVTx",
      selectedIndex: 0,
      categoryId: 1,
      likes: 38
    },{
      id: 20,
      name: "Книга Кавамура Гэнки: Если все кошки в мире исчезнут",
      description: "Международный феномен",
      price: "2 628 ₸",
      rating: 5,
      images: ["https://resources.cdn-kaspi.kz/img/m/p/h88/h42/80682277699614.jpg?format=gallery-medium"],
      link: "https://l.kaspi.kz/shop/DUQ3bgLYZUn7HNr",
      selectedIndex: 0,
      categoryId: 1,
      likes: 491
    }
  ];

  categoryID = input<number>();
  get filteredProducts(): Product[] {
    return this.Products.filter(
      p => p.categoryId === this.categoryID()
    );
  }

  nextImage(product: Product) {
    product.selectedIndex =
      (product.selectedIndex + 1) % product.images.length;
  }

  prevImage(product: Product) {
    product.selectedIndex =
      (product.selectedIndex - 1 + product.images.length) %
      product.images.length;
  }

  deleteProduct(id: number) {
    this.Products = this.Products.filter(s => s.id !== id);
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
