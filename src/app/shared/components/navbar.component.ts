import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { ThemeToggleComponent } from './theme-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule, LanguageSwitcherComponent, ThemeToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly isScrolled = signal(false);
  readonly isMobileMenuOpen = signal(false);

  readonly navItems: { key: string; fragment?: string; route?: string }[] = [
    { key: 'about', fragment: 'about' },
    { key: 'portfolio', fragment: 'projects' },
    { key: 'blog', route: '/blog' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }
  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
