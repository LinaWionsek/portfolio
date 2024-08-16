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


  ngOnInit(): void {
   
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
   
      if (this.translate.currentLang == 'en') {
        this.englishLang = true;
      } else {
        this.englishLang = false;
      }
    });
  }
  changeShowStatus() {
    this.show = !this.show;
  }

  closeDialog() {
    this.show = false;
  }

  translateText(lang: string) {
    this.translate.use(lang);

  }

  scrollTo(id: string) {
    window.location.hash = '';
    window.location.href = '#'+id;
  }
}
