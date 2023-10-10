import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  listOrder: any = [];
  user: any = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    // get user info from local storage
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigateByUrl('/login').then();
      return;
    }
    this.user = JSON.parse(user);
    // call api get list order with param is user id
    this.http.get(`http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/order/getAllOrderOfUser/${this.user.id}`)
      .subscribe((res: any) => {
        this.listOrder = res;
      });
  }

}
