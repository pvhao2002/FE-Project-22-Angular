import {Component, OnInit} from '@angular/core';
import {CartService} from "./cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";
import {finalize} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any = [];

  constructor(
    private cartService: CartService,
    private router: Router,
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) {
  }

  openProduct(id: any) {
    this.router.navigate(['/product-detail', id]).then();
  }


  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  removeItem(product: any) {
    this.cartService.removeItem(product);
    this.cart = this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = this.cartService.getCart();
  }

  checkout() {
    if(!this.cart.length) {
      return;
    }
  }
}
