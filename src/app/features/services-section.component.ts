import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RevealDirective } from '../shared/directives/reveal.directive';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RouterLink, TranslateModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="services" class="section-padding">
      <div class="container-custom">

        <div class="max-w-3xl mx-auto text-center mb-16" appReveal>
          <span class="badge mb-4">{{ 'services.badge' | translate }}</span>
          <h2 class="font-display text-4xl sm:text-5xl font-bold text-ink-900 dark:text-ink-50 mb-4">
            {{ 'services.heading' | translate }}
          </h2>
          <p class="text-lg text-ink-600 dark:text-ink-400">
            {{ 'services.subheading' | translate }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          @for (service of services; track service.key; let i = $index) {
            <div class="card flex flex-col gap-4" appReveal [revealDelay]="i * 80">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" [attr.d]="service.icon" />
                </svg>
              </div>
              <div>
                <h3 class="font-display font-semibold text-lg text-ink-900 dark:text-ink-50 mb-2">
                  {{ 'services.' + service.key + '.title' | translate }}
                </h3>
                <p class="text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                  {{ 'services.' + service.key + '.description' | translate }}
                </p>
              </div>
            </div>
          }
        </div>

        <!-- Arbeitsbeispiele -->
        <div class="max-w-3xl mx-auto text-center" appReveal>
          <p class="text-ink-500 dark:text-ink-400 text-sm mb-3">{{ 'services.examples' | translate }}</p>
          <a [routerLink]="['/']" fragment="projects"
             class="btn-primary">
            {{ 'services.cta' | translate }}
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  `,
})
export class ServicesSectionComponent {
  readonly services = [
    {
      key: 'websites',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    },
    {
      key: 'webapps',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      key: 'frontend',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    },
    {
      key: 'backend',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
    },
    {
      key: 'quality',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];
}
