import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { ThemeToggleComponent } from './theme-toggle.component';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule, LanguageSwitcherComponent, ThemeToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly profile = inject(ProfileService);
  readonly isScrolled = signal(false);
  readonly isMobileMenuOpen = signal(false);

  private readonly elRef = inject(ElementRef);

  readonly navItems: { key: string; fragment?: string; route?: string }[] = [
    { key: 'home', fragment: 'home' },
    { key: 'about', fragment: 'about' },
    { key: 'portfolio', fragment: 'projects' },
    { key: 'blog', route: '/blog' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isMobileMenuOpen() && !this.elRef.nativeElement.contains(event.target)) {
      this.isMobileMenuOpen.set(false);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }
  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
