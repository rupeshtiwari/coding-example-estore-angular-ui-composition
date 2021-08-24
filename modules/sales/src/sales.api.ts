import { Order } from './models/order';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';

import { CartItem } from './models/cart-item';
import { Product } from './models/product';

@Injectable()
export class SalesApi {
  cartItem = new Subject<CartItem>();
  order = new Subject<Order>();

  products = [
    Product.create({
      id: "1",
      name: "Ice Creame",
      imageLink: "https://i.imgur.com/Stfcjsh.png",
    }),
    Product.create({
      id: "2",
      name: "Parle G",
      imageLink: "https://i.imgur.com/0hVl9sS.png",
    }),
    Product.create({
      id: "3",
      name: "iPhone",
      imageLink: "https://i.imgur.com/qwjsQc6.png",
    }),
  ];

  getAllProducts() {
    return of(this.products);
  }

  createOrder(order: Order): Observable<Order> {
    setTimeout(() => this.order.next(order), 500);
    return this.order;
  }

  addToCart(cartItem: CartItem): Observable<CartItem> {
    setTimeout(() => this.cartItem.next(cartItem), 500);
    return this.cartItem;
  }
}
