import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/api-login/login.service';

@Component({
  selector: 'app-topbar-orden-vendedor',
  templateUrl: './topbar-orden-vendedor.component.html',
  styleUrls: ['./topbar-orden-vendedor.component.css']
})
export class TopbarOrdenVendedorComponent {

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
