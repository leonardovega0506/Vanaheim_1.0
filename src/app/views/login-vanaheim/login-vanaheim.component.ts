import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/api-login/login.service';

@Component({
  selector: 'app-login-vanaheim',
  templateUrl: './login-vanaheim.component.html',
  styleUrls: ['./login-vanaheim.component.css']
})
export class LoginVanaheimComponent implements OnInit{

  loginForm={
    username:'',
    password:''
  };

  constructor(private loginService:LoginService,private router:Router){}

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm);
    this.loginService.loginToken(this.loginForm).subscribe(
      (data:any)=>{
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe(
          (user:any)=>{
            this.loginService.setUser(user);
            /*if(this.loginService.getUserRoles()=="ROLE_ADMIN"){
              this.router.navigate(['admin']);
            }
            else{
              this.loginService.logout();
            }*/
            this.router.navigate(['admin']);
          }
        );
      }
    );
  }
}
