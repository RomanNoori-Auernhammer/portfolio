# Angular Signals in der Praxis — wann sie wirklich helfen

Signals sind seit Angular 16 als Developer Preview dabei, seit Angular 17 stabil. Ich nutze sie inzwischen in produktiven Projekten — hier meine ehrliche Einschätzung.

## Das Grundprinzip

Ein Signal ist ein reaktiver Wert, der seinen Konsumenten automatisch über Änderungen informiert. Im Gegensatz zu RxJS-Observables ist die API minimal:

```typescript
const count = signal(0);
count.set(1);
count.update(v => v + 1);
console.log(count()); // 2
```

## Wo Signals wirklich glänzen

### Komponenten-State

Für lokalen Zustand in Komponenten sind Signals klar besser als `BehaviorSubject`. Kein `.value`, kein manuelles Subscribe, kein Unsubscribe.

```typescript
readonly isMobileMenuOpen = signal(false);

toggleMenu(): void {
  this.isMobileMenuOpen.update(v => !v);
}
```

### OnPush Change Detection

Signals und `ChangeDetectionStrategy.OnPush` sind ein starkes Duo. Angular erkennt automatisch, wenn ein Signal in einem Template gelesen wird, und aktualisiert nur diese Komponente — ohne `markForCheck()`.

### Computed Values

```typescript
readonly fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
```

`computed()` ist nur dann reaktiv auf die Signals, die tatsächlich gelesen werden — lazy und effizient.

## Wo ich noch auf RxJS setze

- **HTTP-Requests**: `HttpClient` gibt Observables zurück — hier macht `toSignal()` den Bridge
- **Komplexe async-Flows**: Operators wie `switchMap`, `debounceTime`, `combineLatest` haben keine Signal-Entsprechung
- **Shared State zwischen Services**: Hier ist RxJS nach wie vor mächtiger

## Fazit

Signals sind kein RxJS-Ersatz, sondern eine Ergänzung. Für UI-State und einfache reaktive Werte sind sie die bessere Wahl. Für komplexe asynchrone Datenflüsse bleibt RxJS das richtige Werkzeug.
