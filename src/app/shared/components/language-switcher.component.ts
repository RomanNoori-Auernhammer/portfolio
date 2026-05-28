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
      <span class="text-base leading-none" aria-hidden="true">
        {{ languageService.currentLang() === 'de' ? '🇩🇪' : '🇬🇧' }}
      </span>
      <span class="font-mono">{{ languageService.currentLang().toUpperCase() }}</span>
    </button>
  `,
})
export class LanguageSwitcherComponent {
  readonly languageService = inject(LanguageService);
}
