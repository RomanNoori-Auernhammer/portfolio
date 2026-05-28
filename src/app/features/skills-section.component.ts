import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from '../core/services/profile.service';
import { RevealDirective } from '../shared/directives/reveal.directive';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [TranslateModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" class="section-padding bg-ink-50 dark:bg-ink-900/40">
      <div class="container-custom">

        <div class="max-w-3xl mx-auto text-center mb-16" appReveal>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            {{ 'skills.heading' | translate }}
          </h2>
          <p class="mt-4 text-lg text-ink-600 dark:text-ink-400">
            {{ 'skills.subheading' | translate }}
          </p>
        </div>

        <div class="max-w-4xl mx-auto divide-y divide-ink-200 dark:divide-ink-800">
          @for (category of profile.skillCategories; track category.id; let i = $index) {
            <div appReveal [revealDelay]="i * 60"
                 class="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-6">
              <span class="sm:w-32 shrink-0 text-xs font-semibold uppercase tracking-widest
                           text-ink-400 dark:text-ink-500 sm:pt-1.5">
                {{ category.nameKey | translate }}
              </span>
              <div class="flex flex-wrap gap-2">
                @for (skill of category.skills; track skill) {
                  <span class="text-sm px-3 py-1 rounded-full
                               bg-white dark:bg-ink-800
                               border border-ink-200 dark:border-ink-700
                               text-ink-700 dark:text-ink-300
                               hover:border-brand-500 hover:text-brand-500
                               transition-colors cursor-default">
                    {{ skill }}
                  </span>
                }
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `,
})
export class SkillsSectionComponent {
  readonly profile = inject(ProfileService);
}
