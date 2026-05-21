import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from '../core/services/profile.service';
import { RevealDirective } from '../shared/directives/reveal.directive';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [DatePipe, TranslateModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="education" class="section-padding bg-ink-100 dark:bg-ink-900/30">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-16" appReveal>
          <span class="badge">{{ 'education.label' | translate }}</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            {{ 'education.heading' | translate }}
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Education -->
          <div appReveal>
            <h3 class="font-display text-2xl font-bold mb-6 flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500" aria-hidden="true">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
              </span>
              {{ 'education.educationTitle' | translate }}
            </h3>

            <div class="space-y-4">
              @for (edu of profile.education; track edu.id) {
                <article class="card">
                  <div class="flex justify-between items-start gap-3 mb-2">
                    <h4 class="font-display font-bold text-ink-900 dark:text-ink-50">
                      {{ edu.degreeKey | translate }}
                    </h4>
                    <span class="badge font-mono whitespace-nowrap">
                      {{ edu.startDate | date: 'yyyy' }}–{{ edu.endDate | date: 'yyyy' }}
                    </span>
                  </div>
                  <p class="text-brand-600 dark:text-brand-400 font-medium text-sm mb-2">{{ edu.institution }}</p>
                  @if (edu.descriptionKey) {
                    <p class="text-sm text-ink-600 dark:text-ink-400">{{ edu.descriptionKey | translate }}</p>
                  }
                </article>
              }
            </div>
          </div>

          <!-- Certifications & Languages -->
          <div appReveal [revealDelay]="150" class="space-y-8">
            <div>
              <h3 class="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500" aria-hidden="true">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                </span>
                {{ 'education.certsTitle' | translate }}
              </h3>
              <ul class="space-y-2" role="list">
                @for (cert of profile.certifications; track cert.id) {
                  <li class="flex items-center justify-between gap-3 p-3 rounded-lg bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800">
                    <span class="text-sm text-ink-800 dark:text-ink-200 flex items-center gap-2">
                      @if (cert.current) {
                        <span class="h-2 w-2 rounded-full bg-brand-500 animate-pulse" aria-hidden="true"></span>
                      }
                      {{ cert.nameKey | translate }}
                    </span>
                    <span class="font-mono text-xs text-ink-500 whitespace-nowrap">
                      {{ cert.date | date: 'MM/yyyy' }}
                    </span>
                  </li>
                }
              </ul>
            </div>

            <div>
              <h3 class="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500" aria-hidden="true">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>
                </span>
                {{ 'education.languagesTitle' | translate }}
              </h3>
              <ul class="space-y-3" role="list">
                @for (lang of profile.languages; track lang.nameKey) {
                  <li class="flex items-center justify-between gap-4">
                    <div class="flex-1 min-w-0">
                      <div class="flex justify-between items-baseline mb-1">
                        <span class="font-medium text-sm text-ink-900 dark:text-ink-100">{{ lang.nameKey | translate }}</span>
                        @if (lang.levelKey) {
                          <span class="text-xs text-ink-500">{{ lang.levelKey | translate }}</span>
                        }
                      </div>
                      <div class="h-1.5 bg-ink-200 dark:bg-ink-800 rounded-full overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full transition-all duration-700"
                             [style.width.%]="lang.proficiency * 20"></div>
                      </div>
                    </div>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class EducationSectionComponent {
  readonly profile = inject(ProfileService);
}
