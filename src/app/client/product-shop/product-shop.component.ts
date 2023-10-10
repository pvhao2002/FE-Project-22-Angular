import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.scss']
})
export class ProductShopComponent implements OnInit {
  listProduct: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private cartService: CartService
  ) {
  }

  openProduct(id: any) {
    this.router.navigate(['/product-detail', id]).then();
  }


  ngOnInit(): void {
    this.http.get('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/product/getAll')
      .subscribe((rs: any) => {
        this.listProduct = rs.data;
      });
  }
  addToCart(product: any) {
    if(!localStorage.getItem('user')) {
      alert('Please login to continue!');
      return;
    }
    this.cartService.addToCart(product);
    alert('Thêm vào giỏ hàng thành công!');
  }
}
