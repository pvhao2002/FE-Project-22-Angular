import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product: Product = {
    id: 0,
    productName: '',
    price: 0,
    image: '',
    description: '',
    category: '',
    author: '',
  };

  constructor(
    private http: HttpClient,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    // get param from url
    const url = window.location.href;
    const id = url.split('/')[4];
    this.http.get(`http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/product/getById/${id}`)
      .subscribe((rs: any) => {
        this.product = rs.data;
      });
  }
  addToCart() {
    // check login
    if(!localStorage.getItem('user')) {
      alert('Please login to continue!');
      return;
    }
    this.cartService.addToCart(this.product);
    alert('Thêm vào giỏ hàng thành công!');
  }
}

interface Product {
  id: number;
  productName: string;
  price: number;
  image: string;
  description: string;
  category: string;
  author: string;
}
