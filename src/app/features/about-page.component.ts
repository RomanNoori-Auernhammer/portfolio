import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSectionComponent } from './about-section.component';
import { ExperienceSectionComponent } from './experience-section.component';
import { SkillsSectionComponent } from './skills-section.component';
import { EducationSectionComponent } from './education-section.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    AboutSectionComponent,
    ExperienceSectionComponent,
    SkillsSectionComponent,
    EducationSectionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-about-section />
    <app-experience-section />
    <app-skills-section />
    <app-education-section />
  `,
})
export class AboutPageComponent {}
