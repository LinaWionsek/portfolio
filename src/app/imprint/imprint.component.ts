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
   * Initializes the component and scrolls the window to the top-left position smoothly.
   *
   */
  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  /**
   * Navigates back to the previous page in the browser history.
   *
   */
  goBack() {
    this.location.back();
  }
}
