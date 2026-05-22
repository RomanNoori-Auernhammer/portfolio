import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="home" class="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div class="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true"></div>
      <div class="absolute top-20 right-1/3 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl animate-float" aria-hidden="true"></div>
      <div class="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl animate-float" style="animation-delay: -3s" aria-hidden="true"></div>

      <div class="container-custom relative z-10 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          <!-- Text -->
          <div>
            <div class="flex items-center gap-4 mb-8 animate-fade-in">
              <img src="assets/images/profile.jpg" alt="Roman Noori-Auernhammer"
                   class="h-14 w-14 rounded-full object-cover object-top ring-2 ring-brand-500/40 shrink-0" />
              <p class="inline-flex items-center gap-3 text-sm font-medium text-brand-600 dark:text-brand-400">
                <span class="h-px w-8 bg-brand-500 shrink-0"></span>
                {{ 'hero.greeting' | translate }}
              </p>
            </div>

            <h1 class="font-display text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 animate-fade-in-up" style="animation-delay: 100ms">
              <span class="block text-ink-900 dark:text-ink-50">{{ 'hero.title' | translate }}</span>
              <span class="block gradient-text">{{ 'hero.role' | translate }}</span>
            </h1>

            <p class="text-lg md:text-xl text-ink-600 dark:text-ink-400 mb-10 leading-relaxed animate-fade-in-up" style="animation-delay: 200ms">
              {{ 'hero.description' | translate }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style="animation-delay: 300ms">
              <a [href]="'mailto:' + profile.personal.email" class="btn-primary">
                {{ 'hero.cta.contact' | translate }}
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a routerLink="/portfolio" class="btn-secondary">
                {{ 'hero.cta.projects' | translate }}
              </a>
            </div>

          </div>

          <!-- Typewriter -->
          <div class="flex items-center justify-center animate-fade-in-up" style="animation-delay: 200ms">
            <div class="relative w-full max-w-sm">
              <div class="absolute -inset-4 bg-brand-500/10 rounded-3xl blur-2xl" aria-hidden="true"></div>
              <div class="relative rounded-2xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 shadow-xl overflow-hidden">
                <!-- Window bar -->
                <div class="flex items-center gap-1.5 px-4 py-3 bg-ink-100 dark:bg-ink-800 border-b border-ink-200 dark:border-ink-700">
                  <span class="h-3 w-3 rounded-full bg-red-400"></span>
                  <span class="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span class="h-3 w-3 rounded-full bg-green-400"></span>
                  <span class="ml-auto font-mono text-xs text-ink-400">roman.dev</span>
                </div>
                <!-- Content -->
                <div class="p-8 font-mono text-sm leading-7">
                  <p>
                    <span class="text-brand-500">const</span>
                    <span class="text-blue-500 dark:text-blue-400"> skills</span>
                    <span class="text-ink-500"> = </span>
                    <span class="text-ink-400">[</span>
                  </p>
                  <p class="pl-6 min-h-[1.75rem]">
                    <span class="text-green-500 dark:text-green-400">"</span><span class="text-ink-900 dark:text-ink-50">{{ displayedText() }}</span><span class="inline-block w-0.5 h-[1.1em] bg-brand-500 mx-px align-middle animate-pulse"></span><span class="text-green-500 dark:text-green-400">"</span>
                  </p>
                  <p class="text-ink-400">]</p>
                  <p>&nbsp;</p>
                  <p class="text-ink-400 dark:text-ink-500">// Roman</p>
                  <p>
                    <span class="text-brand-500">export default</span>
                    <span class="text-ink-700 dark:text-ink-300"> skills</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent implements OnInit {
  readonly profile = inject(ProfileService);
  readonly displayedText = signal('');

  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);

  private currentIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.destroyRef.onDestroy(() => {
      if (this.timeoutId) clearTimeout(this.timeoutId);
    });
    this.typeNext();
  }

  private get skills(): string[] {
    const result = this.translate.instant('hero.typewriter.skills');
    return Array.isArray(result) ? result : [];
  }

  private typeNext(): void {
    const skills = this.skills;
    if (!skills.length) return;

    const current = skills[this.currentIndex];

    if (!this.isDeleting) {
      this.charIndex++;
      this.displayedText.set(current.slice(0, this.charIndex));

      if (this.charIndex === current.length) {
        this.timeoutId = setTimeout(() => {
          this.isDeleting = true;
          this.typeNext();
        }, 2000);
        return;
      }
    } else {
      this.charIndex--;
      this.displayedText.set(current.slice(0, this.charIndex));

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % skills.length;
      }
    }

    this.timeoutId = setTimeout(() => this.typeNext(), this.isDeleting ? 60 : 130);
  }
}
