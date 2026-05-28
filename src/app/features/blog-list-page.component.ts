import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/directives/reveal.directive';

@Component({
  selector: 'app-blog-list-page',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section-padding">
      <div class="container-custom max-w-4xl mx-auto">

        <!-- Header -->
        <div class="max-w-2xl mb-16" appReveal>
          <h1 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Aus meiner Praxis
          </h1>
          <p class="mt-4 text-lg text-ink-600 dark:text-ink-400">
            Womit ich mich beschäftige — Erfahrungen, Learnings und Gedanken aus dem Entwickleralltag.
          </p>
        </div>

        <!-- Claude Code Feature Card -->
        <article appReveal class="relative rounded-3xl overflow-hidden border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 shadow-xl">
          <div class="h-1 w-full bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600"></div>

          <div class="p-8 md:p-12">

            <!-- Title row -->
            <div class="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              <div class="shrink-0 flex items-center justify-center h-16 w-16 rounded-2xl
                          bg-gradient-to-br from-brand-500/20 to-brand-600/10
                          ring-1 ring-brand-500/20 shadow-lg shadow-brand-500/10">
                <svg viewBox="0 0 24 24" class="h-9 w-9 text-brand-500" fill="currentColor" aria-hidden="true">
                  <path d="M17.304 3.541 12.836 16.87h-2.275L6.696 3.541h2.29L12 13.632l3.014-10.091h2.29ZM21.5 3.541v13.328h-2.09V3.541H21.5ZM2.5 3.541h2.09v13.328H2.5V3.541Z"/>
                </svg>
              </div>
              <div>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="font-mono text-xs px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 border border-brand-500/20">täglich im Einsatz</span>
                  <span class="font-mono text-xs px-3 py-1 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-500 dark:text-ink-400 border border-ink-200 dark:border-ink-700">CLI · KI-Tool · Anthropic</span>
                </div>
                <h2 class="font-display text-2xl md:text-3xl font-bold text-ink-900 dark:text-ink-50 leading-tight">
                  Claude Code — KI-gestützte Entwicklung direkt im Terminal
                </h2>
              </div>
            </div>

            <!-- What is it -->
            <p class="text-ink-600 dark:text-ink-400 leading-relaxed mb-8">
              Claude Code ist ein von Anthropic entwickeltes Command-Line-Tool, das das KI-Modell Claude direkt in die Entwicklungsumgebung integriert. Anders als browserbasierte KI-Assistenten läuft Claude Code vollständig im Terminal und hat dabei direkten Zugriff auf das lokale Projekt — Dateien lesen, bearbeiten, Shell-Befehle ausführen und Git-Operationen durchführen. Ich setze es täglich ein und habe mich intensiv damit auseinandergesetzt.
            </p>

            <!-- Features grid -->
            <h3 class="font-display text-base font-bold text-ink-900 dark:text-ink-100 mb-4 uppercase tracking-wide">
              Kernfunktionen
            </h3>
            <div class="grid sm:grid-cols-2 gap-3 mb-8">
              @for (feature of features; track feature.title) {
                <div class="flex gap-3 p-4 rounded-xl bg-ink-50 dark:bg-ink-800/60 border border-ink-200 dark:border-ink-700">
                  <div class="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="feature.icon"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-ink-900 dark:text-ink-100 mb-0.5">{{ feature.title }}</p>
                    <p class="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">{{ feature.description }}</p>
                  </div>
                </div>
              }
            </div>

            <!-- My usage -->
            <div class="rounded-2xl bg-gradient-to-br from-brand-500/5 to-brand-600/5 border border-brand-500/20 p-6 mb-6">
              <h3 class="font-display text-base font-bold text-ink-900 dark:text-ink-100 mb-3">Wie ich es einsetze</h3>
              <ul class="space-y-2">
                @for (use of usages; track use) {
                  <li class="flex gap-2 text-sm text-ink-700 dark:text-ink-300">
                    <svg class="h-4 w-4 text-brand-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {{ use }}
                  </li>
                }
              </ul>
            </div>

            <p class="text-sm text-ink-500 dark:text-ink-400 italic border-l-2 border-brand-500/40 pl-4">
              „Claude Code ist für mich kein Ersatz für eigenes Denken, sondern ein Multiplikator — die Qualität des Outputs hängt direkt von der Qualität der eigenen Fragen ab."
            </p>

          </div>
        </article>

      </div>
    </div>
  `,
})
export class BlogListPageComponent {
  readonly features = [
    {
      title: 'Vollständiger Projektzugriff',
      description: 'Liest und bearbeitet alle Dateien im Projekt — inkl. Abhängigkeiten, Konfiguration und Testdateien.',
      icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
    },
    {
      title: 'Shell-Befehle & Git',
      description: 'Führt Build-Prozesse, Tests, Linter und Git-Operationen direkt aus — mit Bestätigung durch den Entwickler.',
      icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    },
    {
      title: 'Multi-File-Editing',
      description: 'Koordiniert Änderungen über mehrere Dateien hinweg — ideal für Refactorings, Umbenennungen und Architekturanpassungen.',
      icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    },
    {
      title: 'Kontextverständnis',
      description: 'Versteht das gesamte Projekt — Struktur, Konventionen, Abhängigkeiten — und gibt darauf abgestimmte Vorschläge.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    },
    {
      title: 'MCP-Erweiterungen',
      description: 'Über das Model Context Protocol (MCP) lässt sich Claude Code mit externen Tools wie Datenbanken oder APIs verbinden.',
      icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
    },
    {
      title: 'Sicherheit & Kontrolle',
      description: 'Jede Dateiänderung und jeder Befehl wird explizit vom Entwickler bestätigt — kein Automatismus ohne Freigabe.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
  ];

  readonly usages = [
    'Refactorings und Umstrukturierungen über mehrere Dateien hinweg — z. B. Migration auf neue Angular-APIs',
    'Fehleranalyse: Claude Code liest Fehlermeldungen, findet die Ursache und schlägt gezielte Fixes vor',
    'Testgenerierung: Unit-Tests für bestehende Services und Komponenten schnell erstellen',
    'Code-Reviews vorbereiten: Änderungen zusammenfassen und auf Qualität prüfen lassen',
    'Dieses Portfolio wurde vollständig mit Claude Code entwickelt und iterativ verbessert',
  ];
}
