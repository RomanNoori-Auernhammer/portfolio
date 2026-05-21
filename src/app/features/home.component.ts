import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-hero-section />`,
})
export class HomeComponent {}
