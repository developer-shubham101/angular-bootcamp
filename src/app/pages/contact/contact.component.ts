import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contact = { name: '', email: '', message: '' };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    // You can add your form submission logic here
    console.log('Form Submitted', this.contact);
  }
}
