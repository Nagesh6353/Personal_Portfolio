import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // Normally, you would send this data to a server or database
      console.log('Contact Form Submitted', this.contact);

      alert('Thank you for your message! I will get back to you soon.');

      // Clear the form
      this.contact = {
        name: '',
        email: '',
        message: ''
      };
    } else {
      alert('Please fill out all fields.');
    }
  }
}
