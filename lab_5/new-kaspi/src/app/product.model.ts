export interface Product{
  id : number;
  name : string;
  description : string;
  price : string;
  rating : number;
  images : string[];
  link : string;
  selectedIndex: number;
  categoryId : number; /*
  1 - books
  2 - kids
  3 - pharmacy
  4 - furniture
  */
  likes : number;
}
