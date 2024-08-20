import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
// import * as AOS from 'aos';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  // ngOnInit() {
  //   AOS.init();
  // }
}
