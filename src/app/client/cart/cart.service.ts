import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = {
    cart: [],
    totalPrice: 0
  }
  cartTmp: any = null;

  addToCart(product: any) {
    this.cart = this.getCart();
    const index = this.cart.cart.findIndex((item: any) => item.product.id === product.id);
    if (index !== -1) {
      this.cart.cart[index].quantity++;
    } else {
      this.cart.cart.push({
        product,
        quantity: 1
      });
    }
    this.cart.totalPrice += product.price;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart() {
    this.cartTmp = localStorage.getItem('cart');
    if (this.cartTmp) {
      this.cart = JSON.parse(this.cartTmp);
    } else {
      this.cart = {
        cart: [],
        totalPrice: 0
      }
    }
    return this.cart;
  }

  removeItem(product: any) {
    this.cart = this.getCart();
    const index = this.cart.cart.findIndex((item: any) => item.product.id === product.id);
    if (index !== -1) {
      this.cart.cart.splice(index, 1);
      this.cart.totalPrice -= product.price;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  clearCart() {
    this.cart = {
      cart: [],
      totalPrice: 0
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}

interface Cart {
  cart: Array<CartItem>;
  totalPrice: number;
}

interface CartItem {
  product: any;
  quantity: number;
}
