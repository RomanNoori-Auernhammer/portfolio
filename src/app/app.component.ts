import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './shared/components/navbar.component';
import { FooterComponent } from './shared/components/footer.component';
import { LanguageService } from './core/services/language.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex min-h-screen flex-col">
      <app-navbar />
      <main id="main-content" class="flex-1" tabindex="-1">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
})
export class AppComponent implements OnInit {
  private readonly translate = inject(TranslateService);
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

  ngOnInit(): void {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use(this.languageService.getInitialLanguage());
    this.themeService.initialize();
  }
}
