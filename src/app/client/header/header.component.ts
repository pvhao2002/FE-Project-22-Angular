import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isLogin = false;
  constructor(
    private cartService: CartService,
  ) {
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user && JSON.parse(user) && JSON.parse(user)?.roleId) {
      this.isLogin = true;
    }
  }

  logout() {
    this.cartService.clearCart();
    localStorage.removeItem('user');
    this.isLogin = false;
  }

}
