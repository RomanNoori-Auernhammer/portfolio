import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      (click)="languageService.toggle()"
      [attr.aria-label]="
        languageService.currentLang() === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'
      "
      class="inline-flex items-center gap-1.5 rounded-full border border-ink-200 dark:border-ink-700
             bg-white/50 dark:bg-ink-900/50 px-3 py-1.5 text-xs font-semibold
             text-ink-700 dark:text-ink-200 backdrop-blur transition-all duration-200
             hover:border-brand-500 hover:text-brand-500"
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span class="font-mono">{{ languageService.currentLang().toUpperCase() }}</span>
    </button>
  `,
})
export class LanguageSwitcherComponent {
  readonly languageService = inject(LanguageService);
}
