import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="home" class="relative min-h-screen flex items-center overflow-hidden pt-16">
      <!-- Decorative background -->
      <div class="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true"></div>
      <div class="absolute top-20 right-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl animate-float" aria-hidden="true"></div>
      <div class="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl animate-float" style="animation-delay: -3s" aria-hidden="true"></div>

      <div class="container-custom relative z-10 py-20">
        <div class="max-w-4xl">
          <p class="badge mb-6 animate-fade-in">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-brand-500"></span>
            </span>
            {{ 'hero.status' | translate }}
          </p>

          <h1 class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 animate-fade-in-up" style="animation-delay: 100ms">
            <span class="block text-ink-900 dark:text-ink-50">{{ 'hero.greeting' | translate }}</span>
            <span class="block gradient-text">{{ profile.personal.name }}</span>
          </h1>

          <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-ink-600 dark:text-ink-300 mb-6 animate-fade-in-up" style="animation-delay: 200ms">
            {{ 'hero.title' | translate }}
            <span class="text-brand-500">{{ 'hero.role' | translate }}</span>
          </h2>

          <p class="text-lg md:text-xl text-ink-600 dark:text-ink-400 max-w-2xl mb-10 leading-relaxed animate-fade-in-up" style="animation-delay: 300ms">
            {{ 'hero.description' | translate }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style="animation-delay: 400ms">
            <a [routerLink]="['/']" fragment="contact" class="btn-primary">
              {{ 'hero.cta.contact' | translate }}
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a [routerLink]="['/']" fragment="projects" class="btn-secondary">
              {{ 'hero.cta.projects' | translate }}
            </a>
          </div>

          <!-- Tech badges -->
          <div class="mt-16 flex flex-wrap gap-2 animate-fade-in-up" style="animation-delay: 500ms">
            <span class="text-xs uppercase tracking-wider text-ink-500 mr-2 self-center">
              {{ 'hero.techStack' | translate }}
            </span>
            @for (tech of mainTech; track tech) {
              <span class="font-mono text-xs px-3 py-1 rounded-md border border-ink-200 dark:border-ink-700
                          bg-white dark:bg-ink-900 text-ink-700 dark:text-ink-300">{{ tech }}</span>
            }
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-400 dark:text-ink-500">
        <span class="text-xs uppercase tracking-wider">{{ 'hero.scroll' | translate }}</span>
        <svg class="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  readonly profile = inject(ProfileService);
  readonly mainTech = ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Tailwind', 'Cloud Native'];
}
