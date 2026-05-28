# Roman Noori-Auernhammer — Portfolio

Persönliche Portfolio-Website von Roman Noori-Auernhammer, Software Engineer aus Schwabach.

Gebaut mit **Angular 18**, **TailwindCSS**, **ngx-translate** (DE/EN) und **Jest**.

## ✨ Features

- 🎨 Modernes Dark/Light-Theme (mit System-Präferenz)
- 🌍 Mehrsprachig DE/EN mit Flaggen-Sprachumschalter
- ⚡ Scroll-Animationen via IntersectionObserver (RevealDirective)
- ♿ Barrierefrei (Skiplink, ARIA, `prefers-reduced-motion`)
- 📱 Responsive für alle Bildschirmgrößen inkl. Slide-in Drawer
- ⌨️ Typewriter-Effekt im Hero-Heading mit rotierenden Wörtern
- 🧪 Jest-Tests für Services & Direktiven
- 🚀 CI/CD via GitHub Actions

## 🛠 Tech Stack

- **Frontend:** Angular 18 (standalone components, signals, neue Control-Flow-Syntax)
- **Styling:** TailwindCSS 3 mit Custom-Color-Palette
- **i18n:** ngx-translate (APP_INITIALIZER für Vorladung vor erstem Render)
- **Tests:** Jest + jest-preset-angular
- **Fonts:** Inter (Body), Space Grotesk (Display), JetBrains Mono (Code)

## 🚀 Schnellstart

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten (http://localhost:4200)
npm start

# Tests ausführen
npm test

# Tests mit Coverage
npm run test:coverage

# Produktions-Build
npm run build
```

## 📁 Projektstruktur

```
src/
├── app/
│   ├── core/
│   │   ├── models/         # TypeScript Interfaces
│   │   └── services/       # Profile, Language, Theme Services
│   ├── shared/
│   │   ├── components/     # Navbar, Footer, Theme-Toggle, Language-Switcher
│   │   └── directives/     # Reveal-on-Scroll Directive
│   ├── features/           # Hero, About, Skills, Projects (inkl. Leistungen), Blog
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
│   └── i18n/               # de.json, en.json
├── index.html
├── main.ts
└── styles.scss
```

## 📄 Seitenstruktur

| Abschnitt | Beschreibung |
|---|---|
| **Hero** | Profil-Foto, Typewriter-Überschrift, CTA-Buttons |
| **Über mich** | Kurzvorstellung, Kennzahlen |
| **Leistungen & Projekte** | 6 Leistungskarten + ausgewählte Projekte in einem Abschnitt |
| **Technologien & Skills** | Pill-Tag-Layout nach Kategorien |
| **Blog** | Letzte Beiträge |

## 🎨 Anpassen

Alle Inhalte (Skills, Projekte) sind zentral in `src/app/core/services/profile.service.ts` gepflegt.

**Übersetzungen** ändern: `src/assets/i18n/de.json` und `en.json`

**Farbpalette** ändern: `tailwind.config.js` → `brand` und `ink` Color-Definitionen.

## 🧪 Tests

```bash
npm test                # Alle Tests einmalig
npm run test:watch      # Watch-Modus
npm run test:coverage   # Mit Coverage-Report
```

Tests umfassen:
- `ThemeService` — Theme-Logik, Persistenz, System-Präferenz
- `LanguageService` — Sprach-Detection, Switch, Toggle
- `ProfileService` — Datenintegrität (Personal, Skills, Projekte)
- `RevealDirective` — Viewport-Erkennung, Animation
- `initTranslations` — Übersetzungs-Vorladung

## 🚀 Deployment

Statisches Hosting nach `npm run build` (Output in `dist/portfolio/browser/`):

- **Vercel:** Repo verbinden, Framework-Preset „Angular"
- **Netlify:** Build-Command `npm run build`, Publish-Directory `dist/portfolio/browser`
- **GitHub Pages:** via `angular-cli-ghpages`

## 📜 Lizenz

MIT © Roman Noori-Auernhammer
