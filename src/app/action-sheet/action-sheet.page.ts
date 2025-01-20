import { Component } from '@angular/core';
import { ActionSheetButton } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: false,
})
export class ActionSheetPage {
  actionSheetButtons: ActionSheetButton[] = [
    {
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      },
    },
    {
      text: 'Share',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
    },
  ];
}
