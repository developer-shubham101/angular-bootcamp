import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-examples',
  
  templateUrl: './directives-examples.component.html',
  styleUrl: './directives-examples.component.css',
})
export class DirectivesExamplesComponent {
  showElement = true;
  items = ['Item 1', 'Item 2', 'Item 3'];
  switchValue = 'A';
  isHighlighted = true;
  textColor = 'blue';
  name = '';
  address = { street: '', city: '' };
  showContainer = true;
}
