import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/api-login/login.service';
import Particles from 'particlesjs';
import Swal from 'sweetalert2';
import { catchError, from } from 'rxjs';

@Component({
  selector: 'app-login-vanaheim',
  templateUrl: './login-vanaheim.component.html',
  styleUrls: ['./login-vanaheim.component.css']
})
export class LoginVanaheimComponent implements OnInit {

  loginForm = {
    username: '',
    password: ''
  };

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    Particles.init({
      selector: '.background',
      color: ['#3A9CDE', '#84BADE'],
      connectParticles: true,
      responsive: [{
        breakpoint: 800,
        options: {
          color: '#3A9CDE',
          maxParticles: 80,
          connectParticles: false
        }
      }]
    });
  }

  login() {
    if (this.loginForm.username.trim() == '' || this.loginForm.password.trim() == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Verifica el usuario o la contraseña',
        timer: 2000,
        showConfirmButton: false
      });
    }
    else {
      Swal.fire({
        title: 'Ingresando',
        text: 'Por favor espere',
        didOpen: () => {
          Swal.showLoading();
        },
        imageUrl: '/assets/esperando.png',
        imageWidth: 450,
        imageHeight: 400,
        imageAlt: 'Esperando'
      });
      from(this.loginService.loginToken(this.loginForm)).subscribe(
        (data: any) => {
          Swal.fire({
            icon:'success',
            title:'Exito',
            text:'Exito al Ingresar',
            timer:2500,
            customClass:{
              title:'my-custom-title',
            }
          });
          this.loginService.loginUser(data.token);
          this.loginService.getCurrentUser().subscribe(
            (user: any) => {
              this.loginService.setUser(user);
              if (this.loginService.getUserRoles() == "ROLE_ADMIN") {
                this.router.navigate(['admin']);
              }
              else if (this.loginService.getUserRoles() == "ROLE_VENTAS") {
                this.router.navigate(['vendedor']);
              }
              else if (this.loginService.getUserRoles() == "ROLE_FINANZAS") {
                this.router.navigate(['finanzas'])
              }
              else {
                this.loginService.logout();
              }
            }
          );
        },
        (error)=>{
          console.log(error);
          Swal.close();
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al ingresar',
            timer: 3000
          });
        }
      );
    }

  }
}
