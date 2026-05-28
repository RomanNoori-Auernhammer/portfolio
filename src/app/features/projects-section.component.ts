import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from '../core/services/profile.service';
import { RevealDirective } from '../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [TranslateModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="section-padding">
      <div class="container-custom">

        <!-- Services -->
        <div class="max-w-3xl mx-auto text-center mb-16" appReveal>
          <span class="badge mb-4">{{ 'services.badge' | translate }}</span>
          <h2 class="font-display text-4xl sm:text-5xl font-bold text-ink-900 dark:text-ink-50 mb-4">
            {{ 'services.heading' | translate }}
          </h2>
          <p class="text-lg text-ink-600 dark:text-ink-400">
            {{ 'services.subheading' | translate }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
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

        <!-- Divider -->
        <div class="border-t border-ink-200 dark:border-ink-800 mb-24" appReveal></div>

        <!-- Projects -->
        <div class="max-w-3xl mx-auto text-center mb-16" appReveal>
          <span class="badge">{{ 'projects.label' | translate }}</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            {{ 'projects.heading' | translate }}
          </h2>
          <p class="mt-4 text-lg text-ink-600 dark:text-ink-400">
            {{ 'projects.subheading' | translate }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          @for (project of profile.projects; track project.id; let i = $index) {
            <article appReveal [revealDelay]="i * 100"
                     class="card group flex flex-col h-full">
              <div class="flex items-center justify-between mb-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl
                            bg-gradient-to-br from-brand-500 to-brand-700
                            text-white shadow-lg shadow-brand-500/30
                            group-hover:scale-110 transition-transform">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                <span class="font-mono text-xs text-ink-500">0{{ i + 1 }}</span>
              </div>

              <h3 class="font-display text-xl font-bold text-ink-900 dark:text-ink-50 mb-3">
                {{ project.titleKey | translate }}
              </h3>

              <p class="text-sm text-ink-600 dark:text-ink-400 mb-4 flex-grow leading-relaxed">
                {{ project.descriptionKey | translate }}
              </p>

              <ul class="space-y-1.5 mb-5 text-sm" role="list">
                @for (key of project.highlightKeys; track key) {
                  <li class="flex gap-2 text-ink-700 dark:text-ink-300">
                    <span class="text-brand-500 flex-shrink-0 mt-1" aria-hidden="true">▸</span>
                    <span>{{ key | translate }}</span>
                  </li>
                }
              </ul>

              <div class="flex flex-wrap gap-1.5 pt-4 border-t border-ink-200 dark:border-ink-800">
                @for (tech of project.technologies; track tech) {
                  <span class="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded
                              text-brand-600 dark:text-brand-400 bg-brand-500/10">{{ tech }}</span>
                }
              </div>
            </article>
          }
        </div>

      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  readonly profile = inject(ProfileService);

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
