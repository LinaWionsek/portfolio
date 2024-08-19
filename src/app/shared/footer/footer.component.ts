import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  /**
   * Scrolls the window to the top of the page with a smooth animation.
   *
   */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
