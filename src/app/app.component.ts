import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  
  /**
   * Initializes the TranslateService and sets the available languages.
   *
   * @param {TranslateService} translate - the TranslateService instance
   * @return {void}
   */
  constructor(public translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('en');
  }

  /**
   * Initializes the component and sets the default language to English.
   *
   */
  ngOnInit() {
    this.translate.use('en');
    AOS.init();
  }

  /**
   * Scrolls the window to the top of the page with a smooth animation and removes any URL hash.
   *
   */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = '';
  }
}
