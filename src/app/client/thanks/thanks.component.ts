import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {
  message: string = 'Đơn hàng của bạn sẽ sớm được vận chuyển!';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const message = params["message"];
      if(message) {
        return;
      }
      const vnpResponseCode = params['vnp_ResponseCode'];
      if (vnpResponseCode !== '00') {
        this.message = 'Đã xảy ra lỗi thanh toán!';
        return;
      }
      const order = localStorage.getItem('order');
      if(!order) {
        this.message = 'Đã xảy ra lỗi thanh toán!';
        return;
      }
      const orderObj = JSON.parse(order);
      orderObj.status = 'Success';
      this.http.post('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/order/add', orderObj)
        .subscribe((res: any) => {
          this.cartService.clearCart();
        });
    });
  }
}
