import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{
 
  constructor() {}

  ngOnInit(){
    let numero = 0;
    console.log('Hola Mundo');
    
    numero = 5;
    numero = 15;
    numero = 7;
    numero = numero *2;

    console.log('Este es mi primer componente');
    console.log('Ultra');
    console.log('Aprendidendo a congelar el tiempo');
    console.log('XD');
  }

}
