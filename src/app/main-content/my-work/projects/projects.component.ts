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
  translate = inject(TranslateService);
  englishLang: boolean = false;
  constructor() {}

  /**
   * Initializes the component by subscribing to the language change event and updates
   * the `englishLang` property based on the current language.
   *
   * @return {void} Nothing is returned.
   */
  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (this.translate.currentLang == 'en') {
        this.englishLang = true;
      } else {
        this.englishLang = false;
      }
    });
  }

  /**
   * Opens the provided URL in a new browser window.
   *
   * @param {string} url - The URL to be opened.
   */
  openURL(url: string) {
    window.open(url, '_blank');
  }
}
