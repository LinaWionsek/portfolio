import { Component, inject } from '@angular/core';
import { SkillsService } from '../../services/skills/skills.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  
  /**
   * Injects the SkillsService to access skill data.
   */
  skillsservice = inject(SkillsService);
}
