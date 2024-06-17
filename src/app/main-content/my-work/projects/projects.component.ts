import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsService} from '../../../services/projects/projects.service';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectsservice = inject(ProjectsService);

  openGithub(url: string) {
    window.open(url, '_blank');
  }
}
