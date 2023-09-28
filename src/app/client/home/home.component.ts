import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {finalize} from "rxjs";
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listProduct: any = [];

  constructor(private http: HttpClient,
              private router: Router,
              private spinner: NgxSpinnerService,
              private cartService: CartService) {
  }
  openProduct(id: any) {
    this.router.navigate(['/product-detail', id]).then();
  }
  ngOnInit(): void {
    this.spinner.show().then();
    this.http.get('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/product/getNewProduct')
      .pipe(finalize(() => {
        setTimeout(() => {
          this.spinner.hide().then();
        }, 1000);
      }))
      .subscribe({
        next: (response: any) => {
          this.listProduct = response.data;
        },
        error: (error) => {
          this.router.navigate(['/']).then();
        }
      });
  }

  addToCart(product: any) {
    if(!localStorage.getItem('user')) {
      alert('Vui lòng đăng nhập để mua hàng!');
      return;
    }
    this.cartService.addToCart(product);
    alert('Thêm vào giỏ hàng thành công!');
  }
}
