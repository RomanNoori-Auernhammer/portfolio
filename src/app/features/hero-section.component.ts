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
    <section id="home" class="relative min-h-[calc(100svh)] lg:min-h-screen flex items-center overflow-hidden pt-16 md:pt-24 pb-20 md:pb-0">
      <div class="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true"></div>
      <div class="absolute top-20 right-1/3 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl animate-float" aria-hidden="true"></div>
      <div class="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl animate-float" style="animation-delay: -3s" aria-hidden="true"></div>

      <div class="container-custom relative z-10 py-6 md:py-12 lg:py-20 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          <!-- Text -->
          <div>
            <!-- Mobile: greeting + small avatar inline -->
            <div class="flex items-center gap-3 mb-8 lg:hidden">
              <img src="assets/images/profile.jpg" alt="Roman Noori-Auernhammer"
                   class="h-11 w-11 rounded-full object-cover object-top ring-2 ring-brand-500/30 shrink-0" />
              <p class="inline-flex items-center gap-3 text-sm font-medium text-brand-600 dark:text-brand-400">
                <span class="h-px w-6 bg-brand-500 shrink-0"></span>
                {{ 'hero.greeting' | translate }}
              </p>
            </div>
            <!-- Desktop: greeting only -->
            <p class="hidden lg:inline-flex items-center gap-3 text-sm font-medium text-brand-600 dark:text-brand-400 mb-8">
              <span class="h-px w-8 bg-brand-500 shrink-0"></span>
              {{ 'hero.greeting' | translate }}
            </p>

            <h1 class="font-display text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.15] mb-6">
              <span class="block text-ink-900 dark:text-ink-50">{{ 'hero.title' | translate }}</span>
              <span class="block gradient-text">{{ 'hero.role' | translate }}</span>
            </h1>

            <p class="text-lg md:text-xl text-ink-600 dark:text-ink-400 mb-10 leading-relaxed">
              {{ 'hero.description' | translate }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <a [routerLink]="['/']" fragment="projects" class="btn-primary">
                {{ 'hero.cta.projects' | translate }}
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a [href]="'mailto:' + profile.personal.email" class="btn-secondary md:hidden">
                {{ 'hero.cta.contact' | translate }}
              </a>
            </div>
          </div>

          <!-- Portrait + Code-Editor: only on large screens -->
          <div class="hidden lg:flex flex-col items-end gap-4">

            <!-- Portrait -->
            <div class="relative w-64">
              <div class="absolute -inset-4 bg-brand-500/10 rounded-3xl blur-2xl" aria-hidden="true"></div>
              <div class="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl ring-1 ring-ink-200 dark:ring-ink-700">
                <img src="assets/images/profile.jpg" alt="Roman Noori-Auernhammer"
                     class="w-full h-full object-cover object-top" />
                <div class="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" aria-hidden="true"></div>
              </div>
              <!-- Available badge -->
              <div class="absolute -top-3 -right-3 flex items-center gap-2 px-3 py-1.5
                          rounded-full bg-white dark:bg-ink-900
                          border border-ink-200 dark:border-ink-700 shadow-lg text-xs font-medium">
                <span class="h-2 w-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true"></span>
                <span class="text-ink-700 dark:text-ink-300">Verfügbar</span>
              </div>
            </div>

            <!-- Code editor card -->
            <div class="w-64 rounded-2xl border border-ink-200 dark:border-ink-700
                        bg-white dark:bg-ink-900 shadow-xl overflow-hidden">
              <div class="flex items-center gap-1 px-3 py-2 bg-ink-100 dark:bg-ink-800 border-b border-ink-200 dark:border-ink-700">
                <span class="h-2 w-2 rounded-full bg-red-400"></span>
                <span class="h-2 w-2 rounded-full bg-yellow-400"></span>
                <span class="h-2 w-2 rounded-full bg-green-400"></span>
                <span class="ml-auto font-mono text-[10px] text-ink-400">roman.dev</span>
              </div>
              <div class="p-4 font-mono text-xs leading-6">
                <p><span class="text-brand-500">const</span><span class="text-blue-500 dark:text-blue-400"> skills</span><span class="text-ink-500"> = [</span></p>
                <p class="pl-4 min-h-[1.5rem]">
                  <span class="text-green-500 dark:text-green-400">"</span><span class="text-ink-900 dark:text-ink-50">{{ displayedText() }}</span><span class="inline-block w-0.5 h-[0.95em] bg-brand-500 mx-px align-middle animate-pulse"></span><span class="text-green-500 dark:text-green-400">"</span>
                </p>
                <p class="text-ink-400">]</p>
                <p>&nbsp;</p>
                <p class="text-ink-400 dark:text-ink-500">// Roman</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-0.5" aria-hidden="true">
        <svg class="h-5 w-5 text-ink-300 dark:text-ink-600" style="animation: scrollFade 1.8s ease-in-out infinite 0s" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
        <svg class="h-5 w-5 text-ink-400 dark:text-ink-500" style="animation: scrollFade 1.8s ease-in-out infinite 0.2s" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
        <svg class="h-5 w-5 text-brand-500" style="animation: scrollFade 1.8s ease-in-out infinite 0.4s" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
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
