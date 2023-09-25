import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  message: string = '';
  isLoading: boolean = false;

  constructor(private router: Router,
              private http: HttpClient,
              private spinier: NgxSpinnerService) {
  }

  onSubmit() {
    this.isLoading = true;
    this.spinier.show().then(r => {
    });
    this.http.post<LoginResponse>('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/user/login', this.form)
      .subscribe((result: LoginResponse) => {
        this.isLoading = false;
        setTimeout(() => {
          this.spinier.hide().then();
        }, 1000);

        if (result.status === '200') {
          const user = result.data;
          localStorage.setItem('user', JSON.stringify(user));
          if (user.roleId === 1) {
            this.router.navigate(['/admin'])
              .then(nav => {
                window.location.reload();
              })
              .catch(err => {
                this.message = "Đăng nhập thất bại";
              });
            return;
          }
          this.router.navigate(['/'])
            .then(nav => {
                window.location.reload();
              }
            ).catch(err => {
            this.message = "Đăng nhập thất bại";
          });
        } else if (result.status === '203') {
          this.message = result.message;
        }
      });
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user && JSON.parse(user)) {
      if (JSON.parse(user).roleId === 1) {
        this.router.navigate(['/admin'])
          .then(nav => {
            window.location.reload();
          })
          .catch(err => {
          });
        return;
      } else {
        this.router.navigate(['/'])
          .then(nav => {
              window.location.reload();
            }
          ).catch(err => {
        });
      }
    }
  }
}

interface LoginResponse {
  status: string;
  message: string;
  data: {
    id: number;
    username: string;
    password: string;
    fullName: string;
    roleId: number;
    isDeleted: boolean;
  }
}
