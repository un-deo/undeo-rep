# CSV (Comma Separated Values)

CSV ist ein textbasiertes Format zur Speicherung strukturierter Daten.  
Da es keine strikte offizielle Norm gibt, variieren es je nach Region
## Kernkonzepte

### 1. Separators & Delimiter
* **Separators (Trennzeichen):** Bestimmen die Spaltentrennung.
    * `,` (Komma): Internationaler Standard.
    * `;` (Semikolon): Standard in DACH-Regionen (vermeidet Konflikte mit dem Dezimalkomma).
* **Delimiter:** Überbegriff für Begrenzer. Man unterscheidet **Field Delimiter** (Trenner zwischen Spalten) und **Record Delimiter** (Zeilenumbrüche wie `\n` oder `\r\n`).

### 2. Quotation & Dialekt & Encoding
* **Quotation (Maskierung):** Felder, die Sonderzeichen oder Trenner enthalten, werden in `"Anführungszeichen"` gesetzt. Doppelte Anführungszeichen im Text werden als `""` maskiert.
* **Dialekt:** Die spezifische Kombination aus Trennzeichen, Maskierung und Zeilenumbruch. Ein Dialekt definiert, wie ein Programm die Datei interpretieren muss.
* **Encoding (Zeichenkodierung):**
    * Bestimmt, wie Zeichen digital gespeichert werden.  
    * **UTF-8:** Der moderne Standard (unterstützt alle Symbole).
    * **ISO-Encodings** sind eine Reihe von internationalen Standards für die Zeichenkodierung, die von der International Organization for Standardization (ISO) entwickelt wurden. 
  Bevor sich UTF-8 als weltweiter Standard durchsetzte, waren ISO-Encodings die wichtigste Methode, um Sonderzeichen verschiedener Sprachen digital darzustellen.
    * **ANSI/Windows-1252:** Häufiger Legacy-Standard bei Excel-Exports.
    * *Problem:* Falsches Encoding führt zu "kaputten" Umlauten (z. B. `Prfung` statt `Prüfung`).
---

## C# Integration (CsvHelper)

In .NET erfolgt der Zugriff effizient über die Library **CsvHelper** mittels `CsvWriter` und `CsvReader`.

### Daten exportieren (Out)
Verwendung des `CsvWriter`, um Objekte direkt in eine CSV-Datei zu schreiben:

```csharp
using var writer = new StreamWriter("export.csv");
using var csv = new CsvWriter(writer, CultureInfo.InvariantCulture);

csv.WriteRecords(meineDatenListe);

```
### Daten importieren (In)
```csharp
using var reader = new StreamReader("import.csv");
using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);

var records = csv.GetRecords<MeinDatenTyp>().ToList();
```
### Formattierung durch Gemini AI da ich mich nicht so gut mit Markdown.md auskenne