import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type SupportedLanguage = 'de' | 'en';
const STORAGE_KEY = 'preferred-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly _currentLang = signal<SupportedLanguage>('de');
  readonly currentLang = this._currentLang.asReadonly();

  getInitialLanguage(): SupportedLanguage {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
      if (stored === 'de' || stored === 'en') {
        this._currentLang.set(stored);
        document.documentElement.setAttribute('lang', stored);
        return stored;
      }
      const browserLang = navigator.language.toLowerCase();
      const lang: SupportedLanguage = browserLang.startsWith('de') ? 'de' : 'en';
      this._currentLang.set(lang);
      document.documentElement.setAttribute('lang', lang);
      return lang;
    } catch {
      return 'de';
    }
  }

  switchLanguage(lang: SupportedLanguage): void {
    this._currentLang.set(lang);
    this.translate.use(lang);
    document.documentElement.setAttribute('lang', lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }

  toggle(): void {
    this.switchLanguage(this._currentLang() === 'de' ? 'en' : 'de');
  }
}
