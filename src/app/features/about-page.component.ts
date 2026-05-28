import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSectionComponent } from './about-section.component';
import { SkillsSectionComponent } from './skills-section.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    AboutSectionComponent,
    SkillsSectionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-about-section />
    <app-skills-section />
  `,
})
export class AboutPageComponent {}
