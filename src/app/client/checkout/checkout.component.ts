import {Component, OnInit} from '@angular/core';
import {FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {CartService} from "../cart/cart.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {finalize} from "rxjs";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  selected = 1;
  checkoutForm: FormGroup;
  cart: any = [];
  user: User = {
    id: 0,
    username: '',
    password: '',
    fullName: '',
    role: 0
  };

  constructor(
    private fb: UntypedFormBuilder,
    private cartService: CartService,
    private router: Router,
    private http: HttpClient
  ) {
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      note: ['']
    });
  }

  ngOnInit(): void {
    const temp = localStorage.getItem('user');
    if (temp) {
      this.user = JSON.parse(temp);
      const {fullName} = this.user;
      this.checkoutForm.patchValue({
        fullName
      });
    } else {
      this.router.navigate(['/login']).then();
    }
    this.cart = this.cartService.getCart();
  }

  onSubmit() {
    if (this.checkoutForm.invalid) {
      return;
    }
    const item: Order = {
      id: 0,
      userId: this.user.id,
      fullName: this.checkoutForm.value.fullName,
      phone: this.checkoutForm.value.phone,
      address: this.checkoutForm.value.address,
      note: this.checkoutForm.value.note,
      status: 'Pending',
      total: this.cart.totalPrice,
      orderItems: [
        ...this.cart.cart.map((i: any) => {
          return {
            id: 0,
            orderId: 0,
            productId: i.product.id,
            quantity: i.quantity,
            price: i.product.price * i.quantity
          };
        })
      ]
    };
    if (this.selected === 1) {
      this.http.post('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/order/add', item)
        .subscribe((res: any) => {
          this.cartService.clearCart();
          this.router.navigate(['/thank-you'], {queryParams: {message: res}}).then();
        });
    } else {
      this.http.get(`http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/payment/vnpay/${this.cart.totalPrice}`)
        .subscribe((res: any) => {
          localStorage.setItem('order', JSON.stringify(item));
          window.location.href = res.URL;
        });
    }
  }


  clickSelect(i: number) {
    this.selected = i;
  }
}

export interface Order {
  note: any;
  address: any;
  phone: any;
  fullName: any;
  id: number;
  userId: number;
  status: string;
  total: number;
  orderItems: any;
}

export interface User {
  id: number;
  username: string;
  password: string;
  fullName: string;
  role: any;
}
