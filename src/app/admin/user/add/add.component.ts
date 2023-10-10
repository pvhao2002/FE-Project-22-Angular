import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";
import {finalize, Observer} from "rxjs";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddUserComponent {
  message: string = '';
  success: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private spinier: NgxSpinnerService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      fullName: ['', Validators.required],
      roleId: ['', Validators.required],
    });
  }

  roleOptions: any[] = [
    {id: '1', role_name: 'ADMIN'},
    {id: '2', role_name: 'CLIENT'},
  ];

  onSubmit() {
    if (this.form.valid) {
      this.spinier.show().then();
      const formData = this.form.value;
      this.http.post('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/user/register', formData)
        .pipe(finalize(() => {
          setTimeout(() => {
            this.spinier.hide().then();
          }, 1000);
        }))
        .subscribe({
          next: (response) => {
            this.message = "Thêm mới thành công";
            this.success = true;
            this.form.reset();
          },
          error: (error) => {
            this.message = "Thêm mới thất bại";
            this.success = false;
          }
        } as Observer<any>);
    } else {
      this.message = 'Vui lòng nhập đầy đủ thông tin.';
    }
  }

}
