import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../../services/projects/projects.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectsservice = inject(ProjectsService);
  englishLang: boolean = false;
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
  
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    
      if (this.translate.currentLang == 'en') {
        this.englishLang = true;
      } else {
        this.englishLang = false;
      }
    });
  }

  openURL(url: string) {
    window.open(url, '_blank');
  }
}
