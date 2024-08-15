import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'portfolio';

  constructor(public translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.translate.use('en');
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = '';
  }
}
