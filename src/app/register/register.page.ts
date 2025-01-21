import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {
  nombre: string = '';
  telefono: string = '';
  direccion: string = '';
  fechaNacimiento: string = '';
  email: string = '';
  password: string = '';
  confirmarPassword: string = '';

  constructor(
    private navController: NavController,
  ) {}

  registrar() {
    if (this.password !== this.confirmarPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Registro exitoso con los siguientes datos:");
    console.log("Nombre:", this.nombre);
    console.log("Teléfono:", this.telefono);
    console.log("Dirección:", this.direccion);
    console.log("Fecha de nacimiento:", this.fechaNacimiento);
    console.log("Email:", this.email);
    console.log("Contraseña:", this.password);
  }

  register(form: NgForm){   
    if(form.valid){
      this.navController.navigateBack('/login');

  }
  }
}
