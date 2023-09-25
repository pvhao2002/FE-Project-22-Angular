import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isLogin = false;

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user && JSON.parse(user) && JSON.parse(user)?.roleId) {
      this.isLogin = true;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.isLogin = false;
  }

}
