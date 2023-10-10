import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  listOrder: any = [];
constructor(
  private http: HttpClient,
) {
}
  ngOnInit(): void {
    this.http.get('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/order/getAll')
      .subscribe((rs: any) => {
        this.listOrder = rs;
      });
  }

}
