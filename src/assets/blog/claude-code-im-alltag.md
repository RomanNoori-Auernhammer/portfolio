# Claude Code im Entwickleralltag — meine Erfahrungen

Seit einigen Monaten arbeite ich täglich mit Claude Code als primärem KI-Tool in meiner Entwicklungsumgebung. Was ich dabei gelernt habe, teile ich hier — offen und ehrlich.

## Was ist Claude Code überhaupt?

Claude Code ist ein CLI-Tool von Anthropic, das direkt im Terminal läuft und Zugriff auf das eigene Dateisystem hat. Im Gegensatz zu Chat-basierten KI-Tools kann es Dateien lesen, bearbeiten und Befehle ausführen — alles mit Bestätigung durch den Entwickler.

## Was mich wirklich überrascht hat

### Kontextverständnis über mehrere Dateien hinweg

Das Beeindruckendste ist, wie Claude Code ein ganzes Projekt versteht. Ich kann fragen "Warum schlägt dieser Test fehl?" und es liest selbstständig die relevanten Dateien, versteht die Abhängigkeiten und gibt eine fundierte Antwort.

### Refactoring ohne Angst

Größere Umstrukturierungen — zum Beispiel die Umstellung dieses Portfolios von einer Single-Page-App auf eine Multi-Page-Struktur und wieder zurück — gehen deutlich schneller. Die Änderungen passieren koordiniert über mehrere Dateien, ohne dass ich den Überblick verliere.

### Was nicht so gut funktioniert

Für sehr domänenspezifisches Wissen (z.B. interne DATEV-Systeme) stößt es naturgemäß an Grenzen. Hier ist Eigenverantwortung gefragt — das Tool ersetzt kein Domänenwissen.

## Mein aktueller Workflow

1. **Planung** im Chat besprechen, bevor Code generiert wird
2. **Kleine Schritte** — lieber 5 kleine Commits als einen großen
3. **Tests laufen lassen** nach jeder Änderung
4. **Code lesen** — ich verstehe jede Zeile, die ins Repo kommt

## Fazit

Claude Code ist für mich kein Ersatz für eigenes Denken, sondern ein Multiplikator. Die Qualität des Outputs hängt direkt von der Qualität der eigenen Fragen ab — und das finde ich ehrlich gesagt motivierend.
