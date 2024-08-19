import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
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
