import { Component } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  standalone: false
})
export class PopoverPage {
  isOpen = false; // Control de visibilidad del popover

  presentPopover(event: Event) {
    this.isOpen = true; // Abre el popover
  }
}
