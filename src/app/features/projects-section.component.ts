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
        <div class="max-w-3xl mx-auto text-center mb-16" appReveal>
          <span class="badge">{{ 'projects.label' | translate }}</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            {{ 'projects.heading' | translate }}
          </h2>
          <p class="mt-4 text-lg text-ink-600 dark:text-ink-400">
            {{ 'projects.subheading' | translate }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
}
