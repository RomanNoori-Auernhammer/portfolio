import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RevealDirective } from '../shared/directives/reveal.directive';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [TranslateModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="section-padding bg-ink-100 dark:bg-ink-900/30">
      <div class="container-custom">
        <div class="grid lg:grid-cols-5 gap-12 items-center">
          <div class="lg:col-span-2" appReveal>
            <div class="relative">
              <div class="absolute -inset-4 bg-gradient-to-br from-brand-500/20 to-brand-700/10 rounded-3xl blur-2xl" aria-hidden="true"></div>
              <div class="relative card !p-8 bg-gradient-to-br from-white to-ink-50 dark:from-ink-900 dark:to-ink-800">
                <div class="aspect-square rounded-2xl overflow-hidden">
                  <img src="assets/images/profile.jpg" alt="Roman Noori-Auernhammer"
                       class="w-full h-full object-cover object-top" />
                </div>
                <div class="mt-6 space-y-3">
                  <div class="flex items-center gap-3 text-sm">
                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 text-brand-500" aria-hidden="true">
                      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    </span>
                    <span class="text-ink-700 dark:text-ink-300 font-medium">Roman Noori-Auernhammer</span>
                  </div>
                  <div class="flex items-center gap-3 text-sm">
                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 text-brand-500" aria-hidden="true">
                      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </span>
                    <span class="text-ink-700 dark:text-ink-300">Schwabach, Bayern</span>
                  </div>
                  <div class="flex items-center gap-3 text-sm">
                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 text-brand-500" aria-hidden="true">
                      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>
                    </span>
                    <span class="text-ink-700 dark:text-ink-300">DE / EN / FA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3 space-y-6" appReveal [revealDelay]="150">
            <span class="badge">{{ 'about.label' | translate }}</span>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {{ 'about.heading' | translate }}
              <span class="gradient-text">{{ 'about.headingHighlight' | translate }}</span>
            </h2>
            <div class="space-y-4 text-base md:text-lg text-ink-700 dark:text-ink-300 leading-relaxed">
              <p>{{ 'about.p1' | translate }}</p>
              <p>{{ 'about.p2' | translate }}</p>
              <p>{{ 'about.p3' | translate }}</p>
            </div>

            <div class="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
              <div class="text-center p-2 sm:p-4 rounded-xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800">
                <div class="font-display text-2xl sm:text-3xl font-bold gradient-text">5+</div>
                <div class="text-[10px] sm:text-xs text-ink-600 dark:text-ink-400 mt-1 leading-tight">{{ 'about.stats.years' | translate }}</div>
              </div>
              <div class="text-center p-2 sm:p-4 rounded-xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800">
                <div class="font-display text-2xl sm:text-3xl font-bold gradient-text">30+</div>
                <div class="text-[10px] sm:text-xs text-ink-600 dark:text-ink-400 mt-1 leading-tight">{{ 'about.stats.techs' | translate }}</div>
              </div>
              <div class="text-center p-2 sm:p-4 rounded-xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800">
                <div class="font-display text-2xl sm:text-3xl font-bold gradient-text">7</div>
                <div class="text-[10px] sm:text-xs text-ink-600 dark:text-ink-400 mt-1 leading-tight">{{ 'about.stats.certs' | translate }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {}
