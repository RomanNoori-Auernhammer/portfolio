import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from '../core/services/profile.service';
import { RevealDirective } from '../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [DatePipe, TranslateModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-16" appReveal>
          <span class="badge">{{ 'experience.label' | translate }}</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            {{ 'experience.heading' | translate }}
          </h2>
          <p class="mt-4 text-lg text-ink-600 dark:text-ink-400">
            {{ 'experience.subheading' | translate }}
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          @for (exp of profile.experiences; track exp.id; let i = $index) {
            <article appReveal [revealDelay]="i * 100" class="relative pl-8 md:pl-12 pb-12 last:pb-0">
              <!-- Timeline line -->
              <div class="absolute left-0 md:left-4 top-2 bottom-0 w-px bg-gradient-to-b from-brand-500 via-brand-500/50 to-transparent" aria-hidden="true"></div>
              <!-- Timeline dot -->
              <div class="absolute left-[-7px] md:left-[9px] top-2 h-4 w-4 rounded-full bg-brand-500 ring-4 ring-white dark:ring-ink-950 shadow-lg shadow-brand-500/40" aria-hidden="true">
                @if (exp.current) {
                  <span class="absolute inset-0 rounded-full bg-brand-500 animate-ping"></span>
                }
              </div>

              <div class="card">
                <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 class="font-display text-xl md:text-2xl font-bold text-ink-900 dark:text-ink-50">
                      {{ exp.positionKey | translate }}
                    </h3>
                    <p class="text-brand-600 dark:text-brand-400 font-semibold mt-1">{{ exp.company }}</p>
                  </div>
                  <span class="badge font-mono">
                    {{ exp.startDate | date: 'MM/yyyy' }} – {{ exp.endDate | date: 'MM/yyyy' }}
                  </span>
                </div>

                <p class="text-ink-700 dark:text-ink-300 mb-6 leading-relaxed">
                  {{ exp.descriptionKey | translate }}
                </p>

                <ul class="space-y-2 mb-6" role="list">
                  @for (key of exp.highlightKeys; track key) {
                    <li class="flex gap-3 text-sm text-ink-700 dark:text-ink-300">
                      <span class="text-brand-500 flex-shrink-0 mt-1" aria-hidden="true">
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </span>
                      <span>{{ key | translate }}</span>
                    </li>
                  }
                </ul>

                <div class="flex flex-wrap gap-1.5 pt-4 border-t border-ink-200 dark:border-ink-800">
                  @for (tech of exp.technologies; track tech) {
                    <span class="font-mono text-xs px-2.5 py-1 rounded-md
                                bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300">{{ tech }}</span>
                  }
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ExperienceSectionComponent {
  readonly profile = inject(ProfileService);
}
