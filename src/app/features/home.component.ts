import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section.component';
import { AboutSectionComponent } from './about-section.component';
import { SkillsSectionComponent } from './skills-section.component';
import { ProjectsSectionComponent } from './projects-section.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero-section />
    <app-projects-section />
    <app-about-section />
    <app-skills-section />
  `,
})
export class HomeComponent {}
