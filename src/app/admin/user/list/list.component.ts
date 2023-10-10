import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";
import {finalize} from "rxjs";
declare let $: any; // Import jQuery
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListUserComponent implements OnInit {
  listUser: any = [];
  userId: number = 0;

  constructor(private http: HttpClient,
              private spiner: NgxSpinnerService,) {
  }

  delete(id: number) {
    this.userId = id;
  }

  cancel() {
    this.userId = 0;
  }

  confirm() {
    if (this.userId != 0) {
      this.spiner.show().then();
      this.http.delete('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/user/delete/' + this.userId)
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

  ngOnInit(): void {
    this.spiner.show().then();
    this.http.get('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/user/list')
      .pipe(finalize(() => {
        setTimeout(() => {
          this.spiner.hide().then();
        }, 1000);
      }))
      .subscribe((res: any) => {
        this.listUser = res.data;
      });
  }
}
