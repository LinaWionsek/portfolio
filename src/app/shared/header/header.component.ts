import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  translate: TranslateService = inject(TranslateService);
  mainContent = true;
  show: boolean = false;
  englishLang: boolean = false;
  lang: any;

  /**
   * Initializes the component by subscribing to the language change event and updates
   * the `englishLang` property based on the current language.
   *
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
   * Toggles the visibility of the component.
   *
   */
  changeShowStatus() {
    this.show = !this.show;
  }

  /**
   * Closes the dialog by setting the show property to false.
   *
   */
  closeDialog() {
    this.show = false;
  }

  /**
   * Sets the current language to the specified language.
   *
   * @param {string} lang - The language code to set.
   */
  translateText(lang: string) {
    this.translate.use(lang);
  }

  /**
   * Scrolls to the specified element on the page.
   *
   * @param {string} id - The id of the element to scroll to.
   * @return {void} Nothing is returned.
   */
  scrollTo(id: string) {
    window.location.hash = '';
    window.location.href = '#' + id;
  }
}
