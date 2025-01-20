import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
  standalone: false,
})
export class AccordionPage {
  
  accordionGroupChange(event: CustomEvent) {
    console.log('Accordion Changed:', event.detail.value);
  }
}

