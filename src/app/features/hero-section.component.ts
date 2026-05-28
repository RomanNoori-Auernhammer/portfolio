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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

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
              <span class="block gradient-text whitespace-nowrap">
                {{ 'hero.role' | translate }}&nbsp;{{ currentWord() }}<span class="inline-block w-0.5 h-[0.85em] bg-brand-500 align-middle animate-blink"></span>
              </span>
            </h1>

            <p class="text-lg md:text-xl text-ink-600 dark:text-ink-400 mb-10 leading-relaxed">
              {{ 'hero.description' | translate }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <!-- Mobile: Termin vereinbaren (grün/primary) -->
              <a href="https://calendly.com/r-noori-auernhammer/30min" target="_blank" rel="noopener noreferrer"
                 class="btn-primary md:hidden">
                {{ 'hero.cta.booking' | translate }}
              </a>
              <!-- Mobile: Kontakt-Icons -->
              <div class="flex gap-3 md:hidden justify-center">
                <a [href]="'tel:' + profile.personal.phone"
                   class="inline-flex h-11 w-11 items-center justify-center rounded-full
                          border border-ink-300 dark:border-ink-700 text-ink-600 dark:text-ink-400
                          hover:border-brand-500 hover:text-brand-500 transition-all hover:-translate-y-0.5"
                   [attr.aria-label]="profile.personal.phone">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </a>
                <a [href]="'mailto:' + profile.personal.email"
                   class="inline-flex h-11 w-11 items-center justify-center rounded-full
                          border border-ink-300 dark:border-ink-700 text-ink-600 dark:text-ink-400
                          hover:border-brand-500 hover:text-brand-500 transition-all hover:-translate-y-0.5"
                   [attr.aria-label]="profile.personal.email">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
                <a [href]="profile.personal.linkedin" target="_blank" rel="noopener noreferrer"
                   class="inline-flex h-11 w-11 items-center justify-center rounded-full
                          border border-ink-300 dark:border-ink-700 text-ink-600 dark:text-ink-400
                          hover:border-brand-500 hover:text-brand-500 transition-all hover:-translate-y-0.5"
                   aria-label="LinkedIn">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a [href]="profile.personal.xing" target="_blank" rel="noopener noreferrer"
                   class="inline-flex h-11 w-11 items-center justify-center rounded-full
                          border border-ink-300 dark:border-ink-700 text-ink-600 dark:text-ink-400
                          hover:border-brand-500 hover:text-brand-500 transition-all hover:-translate-y-0.5"
                   aria-label="Xing">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.643-.962-.643H3.648z"/>
                  </svg>
                </a>
              </div>
              <!-- Desktop: Termin vereinbaren (primary) -->
              <a href="https://calendly.com/r-noori-auernhammer/30min" target="_blank" rel="noopener noreferrer"
                 class="btn-primary hidden md:inline-flex">
                {{ 'hero.cta.booking' | translate }}
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Portrait: only on large screens -->
          <div class="hidden lg:block relative w-72 ml-auto">
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
  readonly currentWord = signal('');

  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);
  private words: string[] = [];
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    const result = this.translate.instant('hero.rotatingWords');
    this.words = Array.isArray(result) ? result : [];
    if (!this.words.length) return;
    this.destroyRef.onDestroy(() => { if (this.timeoutId) clearTimeout(this.timeoutId); });
    this.typeNext();
  }

  private typeNext(): void {
    const current = this.words[this.wordIndex];

    if (!this.isDeleting) {
      this.charIndex++;
      this.currentWord.set(current.slice(0, this.charIndex));
      if (this.charIndex === current.length) {
        this.timeoutId = setTimeout(() => { this.isDeleting = true; this.typeNext(); }, 2000);
        return;
      }
    } else {
      this.charIndex--;
      this.currentWord.set(current.slice(0, this.charIndex));
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
      }
    }

    this.timeoutId = setTimeout(() => this.typeNext(), this.isDeleting ? 60 : 120);
  }
}
