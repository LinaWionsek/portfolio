import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(private location: Location) {}

  /**
   * Navigates back to the previous page in the browser history.
   *
   */
  goBack() {
    this.location.back();
  }
}
