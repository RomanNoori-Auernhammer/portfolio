import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectsSectionComponent } from './projects-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [ProjectsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-projects-section />`,
})
export class PortfolioPageComponent {}
