import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-950">
      <div class="container-custom py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-2 font-display font-bold text-lg mb-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-lg
                           bg-gradient-to-br from-brand-400 to-brand-600
                           text-white font-bold text-sm" aria-hidden="true">RN</span>
              <span>Roman<span class="text-brand-500">.</span></span>
            </div>
            <p class="text-sm text-ink-600 dark:text-ink-400 max-w-xs">
              {{ 'footer.tagline' | translate }}
            </p>
          </div>

          <div>
            <h3 class="font-display font-semibold text-sm uppercase tracking-wider text-ink-900 dark:text-ink-100 mb-4">
              {{ 'footer.quickLinks' | translate }}
            </h3>
            <ul class="space-y-2 text-sm" role="list">
              <li><a [routerLink]="['/']" fragment="about" class="text-ink-600 dark:text-ink-400 hover:text-brand-500 transition-colors">{{ 'nav.about' | translate }}</a></li>
              <li><a [routerLink]="['/']" fragment="projects" class="text-ink-600 dark:text-ink-400 hover:text-brand-500 transition-colors">{{ 'nav.projects' | translate }}</a></li>
              <li><a [routerLink]="['/']" fragment="contact" class="text-ink-600 dark:text-ink-400 hover:text-brand-500 transition-colors">{{ 'nav.contact' | translate }}</a></li>
            </ul>
          </div>

          <div>
            <h3 class="font-display font-semibold text-sm uppercase tracking-wider text-ink-900 dark:text-ink-100 mb-4">
              {{ 'footer.contact' | translate }}
            </h3>
            <ul class="space-y-2 text-sm" role="list">
              <li>
                <a [href]="'mailto:' + profile.personal.email"
                   class="text-ink-600 dark:text-ink-400 hover:text-brand-500 transition-colors break-all">
                  {{ profile.personal.email }}
                </a>
              </li>
              <li class="text-ink-600 dark:text-ink-400">{{ profile.personal.location }}</li>
            </ul>
            <div class="flex gap-3 mt-4">
              <a [href]="profile.personal.github" target="_blank" rel="noopener noreferrer"
                 class="inline-flex h-9 w-9 items-center justify-center rounded-full
                        border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200
                        transition-all hover:border-brand-500 hover:text-brand-500 hover:-translate-y-0.5"
                 aria-label="GitHub">
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a [href]="profile.personal.linkedin" target="_blank" rel="noopener noreferrer"
                 class="inline-flex h-9 w-9 items-center justify-center rounded-full
                        border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200
                        transition-all hover:border-brand-500 hover:text-brand-500 hover:-translate-y-0.5"
                 aria-label="LinkedIn">
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="pt-8 border-t border-ink-200 dark:border-ink-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-xs text-ink-500 dark:text-ink-400">
            © {{ currentYear }} {{ profile.personal.name }}. {{ 'footer.rights' | translate }}
          </p>
          <ul class="flex gap-4 text-xs" role="list">
            <li><a routerLink="/imprint" class="text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors">{{ 'footer.imprint' | translate }}</a></li>
            <li><a routerLink="/privacy" class="text-ink-500 dark:text-ink-400 hover:text-brand-500 transition-colors">{{ 'footer.privacy' | translate }}</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly profile = inject(ProfileService);
  readonly currentYear = new Date().getFullYear();
}
