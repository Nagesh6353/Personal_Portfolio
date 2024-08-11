import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  projects = [
    {
      title: 'Project One',
      description: 'E-learning Platform.',
      link: 'https://example.com/project-one',
    },
    {
      title: 'Project Two',
      description: 'A mobile app with incredible features.',
      link: 'https://example.com/project-two',
    },
    // Add more projects as needed
  ];
}
