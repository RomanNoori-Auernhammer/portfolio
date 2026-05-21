# Roman Noori-Auernhammer — Portfolio

Persönliche Portfolio-Website von Roman Noori-Auernhammer, Software Engineer aus Schwabach.

Gebaut mit **Angular 18**, **TailwindCSS**, **ngx-translate** (DE/EN) und **Jest**.

## ✨ Features

- 🎨 Modernes Dark/Light-Theme (mit System-Präferenz)
- 🌍 Mehrsprachig DE/EN mit Sprachumschalter
- ⚡ Scroll-Animationen via IntersectionObserver
- ♿ Barrierefrei (Skiplink, ARIA, `prefers-reduced-motion`)
- 📱 Responsive für alle Bildschirmgrößen
- 📧 DSGVO-konformes Kontaktformular (mailto, kein Backend)
- 🧪 Jest-Tests für Services & Komponenten
- 🚀 CI/CD via GitHub Actions

## 🛠 Tech Stack

- **Frontend:** Angular 18 (standalone components, signals, neue Control-Flow-Syntax)
- **Styling:** TailwindCSS 3 mit Custom-Color-Palette
- **i18n:** ngx-translate
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
│   │   └── services/       # Profile, Language, Theme, Contact Services
│   ├── shared/
│   │   ├── components/     # Navbar, Footer, Theme-Toggle, Language-Switcher
│   │   └── directives/     # Reveal-on-Scroll Directive
│   ├── features/           # Hero, About, Experience, Skills, Projects, Education, Contact
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
│   └── i18n/               # de.json, en.json
├── index.html
├── main.ts
└── styles.scss
```

## 🎨 Anpassen

Alle Inhalte (Erfahrungen, Skills, Projekte, Zertifikate) sind zentral in `src/app/core/services/profile.service.ts` gepflegt — keine Texte verstreut im Code.

**Übersetzungen** ändern: `src/assets/i18n/de.json` und `en.json`

**Farbpalette** ändern: `tailwind.config.js` — siehe `brand` und `ink` Color-Definitionen.

**Kontakt-E-Mail** ändern: `src/app/core/services/contact.service.ts` — Eigenschaft `recipientEmail`.

## 📧 Kontaktformular

Das Formular nutzt eine **mailto-Lösung**: Beim Absenden öffnet sich der lokale Mail-Client mit vorausgefüllten Daten. Es wird **kein Backend** benötigt und **keine Daten** werden an Server übertragen — vollständig DSGVO-konform.

## 🚀 Deployment

Statisches Hosting nach `npm run build` (Output in `dist/portfolio/browser/`):

- **Vercel:** Repo verbinden, Framework-Preset "Angular"
- **Netlify:** Build-Command `npm run build`, Publish-Directory `dist/portfolio/browser`
- **GitHub Pages:** via `angular-cli-ghpages`

## 🧪 Tests

```bash
npm test                # Alle Tests einmalig
npm run test:watch      # Watch-Modus
npm run test:coverage   # Mit Coverage-Report
```

Tests umfassen:
- `ThemeService` — Theme-Logik, Persistenz, System-Präferenz
- `LanguageService` — Sprach-Detection, Switch, Toggle
- `ContactService` — Mailto-URL-Erstellung, Encoding
- `ProfileService` — Datenintegrität
- `ContactSectionComponent` — Formular-Validierung & Submit

## 📜 Lizenz

MIT © Roman Noori-Auernhammer
