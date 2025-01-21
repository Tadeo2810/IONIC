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
  // Variables vinculadas al formulario
  nombre: string = '';
  telefono: string = '';
  direccion: string = '';
  fechaNacimiento: string = '';
  email: string = '';
  password: string = '';
  confirmarPassword: string = '';

  constructor(private navController: NavController) {}

  // Método para manejar el registro
  registrar() {
    if (this.password !== this.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Log de datos en consola
    console.log('Registro exitoso con los siguientes datos:');
    console.log('Nombre:', this.nombre);
    console.log('Teléfono:', this.telefono);
    console.log('Dirección:', this.direccion);
    console.log('Fecha de nacimiento:', this.fechaNacimiento);
    console.log('Email:', this.email);
    console.log('Contraseña:', this.password);
  }

  // Método para procesar el formulario
  register(form: NgForm) {
    if (form.valid) {
      // Redirige al login si el formulario es válido
      this.navController.navigateBack('/login');
    } else {
      alert('Por favor, completa todos los campos correctamente');
    }
  }
}
