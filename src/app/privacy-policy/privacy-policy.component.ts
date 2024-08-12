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

  ngOnInit(): void {
   
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

  }

  goBack() {
    this.location.back();
  }
  
}
