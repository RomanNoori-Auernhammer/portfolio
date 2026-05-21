import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section.component';
import { AboutSectionComponent } from './about-section.component';
import { ExperienceSectionComponent } from './experience-section.component';
import { SkillsSectionComponent } from './skills-section.component';
import { ProjectsSectionComponent } from './projects-section.component';
import { EducationSectionComponent } from './education-section.component';
import { ContactSectionComponent } from './contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero-section />
    <app-about-section />
    <app-experience-section />
    <app-skills-section />
    <app-projects-section />
    <app-education-section />
    <app-contact-section />
  `,
})
export class HomeComponent {}
