import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section-padding pt-32">
      <div class="container-custom max-w-3xl">
        @if (type === 'imprint') {
          <h1 class="font-display text-4xl font-bold mb-8">{{ 'legal.imprint.title' | translate }}</h1>
          <div class="prose dark:prose-invert max-w-none space-y-4 text-ink-700 dark:text-ink-300">
            <h2 class="font-display text-xl font-bold pt-4">{{ 'legal.imprint.section1' | translate }}</h2>
            <p>
              {{ profile.personal.name }}<br />
              {{ profile.personal.location }}<br />
            </p>
            <h2 class="font-display text-xl font-bold pt-4">{{ 'legal.imprint.section2' | translate }}</h2>
            <p>
              {{ 'legal.imprint.email' | translate }}: <a [href]="'mailto:' + profile.personal.email" class="text-brand-500 hover:underline">{{ profile.personal.email }}</a><br />
              {{ 'legal.imprint.phone' | translate }}: {{ profile.personal.phone }}
            </p>
            <h2 class="font-display text-xl font-bold pt-4">{{ 'legal.imprint.disclaimer' | translate }}</h2>
            <p class="text-sm">{{ 'legal.imprint.disclaimerText' | translate }}</p>
          </div>
        } @else {
          <h1 class="font-display text-4xl font-bold mb-8">{{ 'legal.privacy.title' | translate }}</h1>
          <div class="space-y-4 text-ink-700 dark:text-ink-300">
            <h2 class="font-display text-xl font-bold pt-4">{{ 'legal.privacy.section1' | translate }}</h2>
            <p class="text-sm leading-relaxed">{{ 'legal.privacy.section1Text' | translate }}</p>
            <h2 class="font-display text-xl font-bold pt-4">{{ 'legal.privacy.section2' | translate }}</h2>
            <p class="text-sm leading-relaxed">{{ 'legal.privacy.section2Text' | translate }}</p>
            <h2 class="font-display text-xl font-bold pt-4">{{ 'legal.privacy.section3' | translate }}</h2>
            <p class="text-sm leading-relaxed">{{ 'legal.privacy.section3Text' | translate }}</p>
            <h2 class="font-display text-xl font-bold pt-4">{{ 'legal.privacy.section4' | translate }}</h2>
            <p class="text-sm leading-relaxed">{{ 'legal.privacy.section4Text' | translate }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class LegalComponent {
  private readonly route = inject(ActivatedRoute);
  readonly profile = inject(ProfileService);
  readonly type: 'imprint' | 'privacy' = this.route.snapshot.data['type'] ?? 'imprint';
}
