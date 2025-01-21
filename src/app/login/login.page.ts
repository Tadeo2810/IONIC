import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  nombre: string ='Tadeo';
  email:string = 'tadeocarrera@utcv.edu.mx';
  password: string = 'dsm2025';

  constructor(
    private toastController: ToastController,
    private navController: NavController,
  ) { }

  ngOnInit() {
  }

  login(){
    if(this.email === 'tadeocarrera@utcv.edu.mx'
    && this.password === 'dsm2025'
    && this.nombre === 'Tadeo'){
    this.navController.navigateRoot('/inicio');
  }
  else{
    this.presentToast();
  }
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Las credenciales de acceso son incorrectas',
    duration: 3000,
    position: 'bottom',
    color: 'warning'
  });

  await toast.present();

}
}