import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/api-login/login.service';

@Component({
  selector: 'app-topbar-admin',
  templateUrl: './topbar-admin.component.html',
  styleUrls: ['./topbar-admin.component.css']
})
export class TopbarAdminComponent {

  showSubMenu: boolean = false;

  constructor(private router:Router,private login:LoginService){}

  logout(){
    this.login.logout();
    this.router.navigate(['/']);
  }

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }

}
