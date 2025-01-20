import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: false,
})
export class AlertPage {
  alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      },
    },
    {
      text: 'OK',
      handler: () => {
        console.log('OK clicked');
      },
    },
  ];
}
