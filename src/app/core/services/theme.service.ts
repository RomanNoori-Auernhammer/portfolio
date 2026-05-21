import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';
const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _theme = signal<Theme>('dark');
  readonly theme = this._theme.asReadonly();

  initialize(): void {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored === 'light' || stored === 'dark') {
        this.applyTheme(stored);
        return;
      }
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.applyTheme(prefersDark ? 'dark' : 'light');
    } catch {
      this.applyTheme('dark');
    }
  }

  toggle(): void {
    this.applyTheme(this._theme() === 'dark' ? 'light' : 'dark');
  }

  private applyTheme(theme: Theme): void {
    this._theme.set(theme);
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }
}
