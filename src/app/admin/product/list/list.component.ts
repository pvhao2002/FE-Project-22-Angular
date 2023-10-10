import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {HttpClient} from "@angular/common/http";
import {finalize} from "rxjs";

declare let $: any; // Import jQuery

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListProductComponent implements OnInit {
  listProduct: any = [];
  userId: number = 0;

  constructor(private http: HttpClient,
              private spiner: NgxSpinnerService,) {
  }

  confirm() {
    if (this.userId != 0) {
      this.spiner.show().then();
      this.http.delete('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/product/delete/' + this.userId)
        .pipe(finalize(() => {
          setTimeout(() => {
            this.spiner.hide().then();
          }, 1000);
          $('#exampleModal').modal('hide');
          this.userId = 0;
        }))
        .subscribe((res: any) => {
          this.ngOnInit();
        });
    }
  }


  delete(id: number) {
    this.userId = id;
  }

  cancel() {
    this.userId = 0;
  }

  ngOnInit(): void {
    this.spiner.show().then();
    this.http.get('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/product/getAll')
      .pipe(finalize(() => {
        setTimeout(() => {
          this.spiner.hide().then();
        }, 1000);
      }))
      .subscribe((res: any) => {
        this.listProduct = res.data;
      });
  }

}
