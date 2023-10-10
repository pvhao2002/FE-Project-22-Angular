import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    username: null,
    password: null,
    fullName: null,
    roleId: 2
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
    this.http.post('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/user/register', this.form)
      .subscribe((result: any) => {
        this.isLoading = false;
        setTimeout(() => {
          this.spinier.hide().then();
        }, 1000);

        if (result.status === '200') {
          this.router.navigate(['/login']).then()
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
