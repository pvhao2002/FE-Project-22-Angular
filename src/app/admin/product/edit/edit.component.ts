import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";
import {ActivatedRoute, Router} from "@angular/router";
import {finalize, Observer} from "rxjs";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditProductComponent {
  message: string = '';
  success: boolean = false;
  form: FormGroup;
  isDisable: boolean = true;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private spinier: NgxSpinnerService,
              private route: ActivatedRoute,
              private router: Router) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      productName: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      author: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.spinier.show().then();
      const formData = this.form.value;
      this.http.patch('http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/product/update', formData)
        .pipe(finalize(() => {
          setTimeout(() => {
            this.spinier.hide().then();
          }, 1000);
        }))
        .subscribe({
          next: (response) => {
            this.router.navigate(['/admin/product/list']).then();
          },
          error: (error) => {
            this.router.navigate(['/admin/product/list']).then();
          }
        } as Observer<any>);
    } else {
      this.message = 'Vui lòng nhập đầy đủ thông tin.';
    }
  }

  ngOnInit(): void {
    const uid = this.route.snapshot.paramMap.get('id');
    if (uid) {
      this.http.get(`http://localhost:8080/BE-Project22-1.0-SNAPSHOT/api/product/getById/${uid}`)
        .subscribe({
          next: (response: any) => {
            this.form.patchValue(response.data);
          },
          error: (error) => {
            this.router.navigate(['/admin/product/list']).then();
          }
        } as Observer<any>);
    }
  }
}
