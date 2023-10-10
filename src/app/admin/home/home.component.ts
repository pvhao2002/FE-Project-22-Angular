import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dashboard: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/dashboard')
      .pipe()
      .subscribe((res: any) => {
        this.dashboard = res;
      });
  }

}
