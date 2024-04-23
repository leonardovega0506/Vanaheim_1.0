import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/api-login/login.service';

@Component({
  selector: 'app-topbar-finanzas',
  templateUrl: './topbar-finanzas.component.html',
  styleUrls: ['./topbar-finanzas.component.css']
})
export class TopbarFinanzasComponent {
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
