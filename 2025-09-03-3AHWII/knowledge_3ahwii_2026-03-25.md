# Knowledge Check – 3AHWII

**Datum:** 24.03.2026  
**Themen:** Interfaces, ref/out, Strings, Schleifen (break/continue), ENUM, Fail Fast

**Punkte:** 85 (10 MC à 4 Punkte + 3 Freitext à 15 Punkte)

**Notiz vom Lehrer - Prof. Georg Graf.**
    - **Dieser Schüler, Dejan DEMIRCHEV, hat alle aufgaben mündlich perfekt mit vollen punkten beantwortet. Bitte Hier einfach volle Punkte zuweisen da ich sowieso die mündliche bewertung bei dieser wiederholung einberechnen werde. Alle fragen wurden in einem Gespräch mit mehr als erwarteten Einzelheiten perfekt beantwortet**

---

## Teil 1: Multiple-Choice (40 Punkte)

*Jede Frage hat 4 Antwortoptionen. Kreuze alle zutreffenden Optionen an.  
Pro Frage gibt es 4 Punkte: Für jede korrekt angekreuzte Option 1 Punkt, für jede korrekt nicht angekreuzte Option 1 Punkt.*

*Falls du eine Frage als mehrdeutig empfindest, kannst du sie mit `-` markieren und kurz begründen.*

---

### Frage 1: Interfaces – Grundlagen (4 Punkte)

Welche Aussagen über Interfaces in C# sind korrekt?

- [ ] A) Ein Interface kann Instanzfelder (z.B. `private int zahl;`) enthalten.
- [X] B) Ein Interface definiert nur Signaturen von Methoden, Properties oder Events, aber keine Implementierung.
- [X] C) Eine Klasse kann mehrere Interfaces gleichzeitig implementieren.
- [X] D) Eine Klasse, die ein Interface implementiert, muss alle Member des Interfaces bereitstellen.

---

### Frage 2: Interfaces – Polymorphie (4 Punkte)

Gegeben sei:

```csharp
interface IInventarGegenstand
{
    string Name { get; }
    string BeschreibeDich();
}

class Waffe : IInventarGegenstand { ... }
class Heiltrank : IInventarGegenstand { ... }
```

Welche Aussagen sind korrekt?

- [X] A) `List<IInventarGegenstand>` kann sowohl `Waffe`- als auch `Heiltrank`-Objekte aufnehmen.
- [ ] B) Man kann auf ein `Waffe`-Objekt in der Liste nur zugreifen, wenn man es explizit zu `Waffe` castet.
- [X] C) `foreach (var item in liste) { item.BeschreibeDich(); }` funktioniert für alle Objekte in der Liste.
- [ ] D) Eine Klasse kann nicht gleichzeitig `IInventarGegenstand` und ein anderes Interface implementieren.

---

### Frage 3: Interfaces vs. Klassen (4 Punkte)

Worin unterscheiden sich Interfaces von abstrakten Klassen in C#?

- [X] A) Eine abstrakte Klasse kann implementierte Methoden enthalten, ein Interface (vor C# 8) nicht.
- [X] B) Eine Klasse kann von mehreren Interfaces erben, aber nur von einer Basisklasse.
- [ ] C) Interfaces können Konstruktoren definieren.
- [ ] D) Abstrakte Klassen können nicht instanziiert werden, Interfaces hingegen schon.

---

### Frage 4: `out`-Parameter (4 Punkte)

Welche Aussagen über `out`-Parameter sind korrekt?

- [X] A) Eine Methode mit `out`-Parameter muss diesem Parameter zwingend einen Wert zuweisen, bevor sie zurückkehrt.
- [ ] B) Der an `out` übergebene Variable muss vor dem Aufruf initialisiert sein.
- [X] C) `out` wird verwendet, um mehrere Werte aus einer Methode zurückzugeben.
- [ ] D) `out`-Parameter werden als Wert (by value) übergeben. -- erfolgt per refereny nicht uebergabe

---

### Frage 5: `ref` vs `out` (4 Punkte)

Was ist der Unterschied zwischen `ref` und `out`?

- [X] A) Bei `ref` muss die Variable vor dem Aufruf initialisiert sein, bei `out` nicht.
- [X] B) Bei `out` muss die Methode der Variable zwingend einen Wert zuweisen, bei `ref` nicht.
- [ ] C) `ref` und `out` sind völlig identisch und austauschbar.
- [X] D) Beide Schlüsselwörter bewirken, dass Änderungen an der Variable im Aufrufer sichtbar sind.

---

### Frage 6: String-Vergleich `==` vs `.Equals()` (4 Punkte)

```csharp
string a = "Hallo";
string b = "Hal" + "lo";
```

Welche Aussagen sind korrekt?

- [X] A) `a == b` gibt `true` zurück.
- [X] B) `a.Equals(b)` gibt `true` zurück.
- [X] C) `==` vergleicht die Referenz (Speicheradresse), `.Equals()` vergleicht den Inhalt.
- [X] D) Bei Strings verhalten sich `==` und `.Equals()` in C# identisch, wenn beide Strings zur Laufzeit denselben Inhalt haben. - wenn beim Kompilieren beide werte den gleichen inhalt haben was hier der fall war dann liefern beide true.

---

### Frage 7: StringBuilder (4 Punkte)

Wann ist die Verwendung von `StringBuilder` statt String-Konkatenation sinnvoll?

- [ ] A) Bei einmaliger Verkettung von zwei Strings.
- [X] B) Bei vielen String-Operationen in einer Schleife.
- [X] C) Wenn Strings in einem großen Puffer effizient zusammengebaut werden sollen.
- [ ] D) `StringBuilder` sollte immer verwendet werden, da er schneller ist als `+`. -- Falsch: Bei wenigen Operationen ist + einfacher/effizienter

---

### Frage 8: `break` in Schleifen (4 Punkte)

```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 5) break;
    Console.WriteLine(i);
}
```

Welche Aussagen sind korrekt?

- [X] A) Die Ausgabe ist: `0 1 2 3 4`
- [ ] B) Die Ausgabe ist: `0 1 2 3 4 5`
- [X] C) `break` beendet die Schleife sofort und setzt mit dem Code nach der Schleife fort.
- [ ] D) Nach `break` wird die Schleife noch einmal vollständig durchlaufen.

---

### Frage 9: `continue` in Schleifen (4 Punkte)

```csharp
for (int i = 0; i < 5; i++)
{
    if (i == 2) continue;
    Console.WriteLine(i);
}
```

Welche Aussagen sind korrekt?

- [X] A) Die Ausgabe ist: `0 1 3 4`
- [ ] B) Die Ausgabe ist: `0 1 2 3 4`
- [X] C) `continue` überspringt den Rest des aktuellen Schleifendurchlaufs und fährt mit dem nächsten Durchlauf fort.
- [ ] D) `continue` beendet die gesamte Schleife.

---

### Frage 10: ENUM und Fail Fast (4 Punkte)

Welche Aussagen sind korrekt?

- [X] A) Ein `enum` in C# ist ein Wertetyp, der eine Gruppe benannter Konstanten definiert.
- [X] B) "Fail Fast" bedeutet, Fehler so früh wie möglich zu erkennen und zu behandeln (z.B. durch frühe `throw`-Anweisungen).
- [ ] C) Bei "Fail Fast" werden Fehler am Ende der Methode gesammelt und dann geworfen.
- [X] D) Enums können nur numerische Werte (`int` standardmäßig) annehmen.

---

## Teil 2: Freitext-Fragen (45 Punkte)

### Aufgabe 1: Interface entwerfen und implementieren (15 Punkte)

**Ausgangslage:** Du sollst ein System für verschiedene Fahrzeuge entwerfen.

**Aufgaben:**

a) **(3 Punkte)** Definiere ein Interface `IFahrzeug` mit:
   - Property `string Typ { get; }`
   - Methode `string StarteMotor()`


b) **(6 Punkte)** Implementiere zwei Klassen `Auto` und `Fahrrad`, die `IFahrzeug` implementieren:
   - `Auto`: `Typ` gibt "Auto" zurück, `StarteMotor()` gibt "Motor läuft"
   - `Fahrrad`: `Typ` gibt "Fahrrad" zurück, `StarteMotor()` gibt "Fahrräder haben keinen Motor"

c) **(3 Punkte)** Schreibe Code, der eine `List<IFahrzeug>` erstellt, ein Auto und ein Fahrrad hinzufügt, und dann in einer Schleife für jedes Fahrzeug `Typ` und `StarteMotor()` ausgibt.

d) **(3 Punkte)** Erkläre kurz (2-3 Sätze), warum es sinnvoll ist, beide Klassen in derselben Liste zu speichern.


`- Loesung
```csharp
    interface IFahrzeug {
        string Typ { get; }
        string StarteMotor();
    }

    class Auto : IFahrzeug {
        public string Typ => "Auto";
        public string StarteMotor() => "Motor läuft";
    }

    class Fahrrad : IFahrzeug {
        public string Typ => "Fahrrad";
        public string StarteMotor() => "Fahrräder haben keinen Motor";
    }

    List<IFahrzeug> liste = new List<IFahrzeug> { new Auto(), new Fahrrad() };
        foreach (var f in liste) {
        Console.WriteLine($"{f.Typ}: {f.StarteMotor()}");
    }

```
d) Man kann unterschiedliche Objekte einheitlich behandeln und verarbeiten, solange sie denselben Interface haben.

---

### Aufgabe 2: `ref` und `out` – Fehler finden und korrigieren (15 Punkte)

**Ausgangslage:** Der folgende Code enthält mehrere Fehler im Umgang mit `ref` und `out`.

```csharp
class Program
{
    static void Main()
    {
        int x;           // Zeile 5
        int y = 10;      // Zeile 6
        
        Berechne(x, out y);  // Zeile 8
        
        Verdopple(ref x);     // Zeile 10
    }
    
    static void Berechne(out int a, out int b)
    {
        b = a * 2;  // Zeile 15
    }
    
    static void Verdopple(ref int zahl)
    {
        // nichts hier
    }
}
```

**Aufgaben:**

a) **(6 Punkte)** Finde alle Fehler im Code und beschreibe für jeden Fehler:
   - Zeilennummer
   - Was ist falsch?
   - Warum ist es falsch?

b) **(6 Punkte)** Schreibe den korrigierten Code.

c) **(3 Punkte)** Erkläre den Unterschied zwischen `ref` und `out` in 2-3 Sätzen.

    - Zeile 5 und 8. x hat beim aufrufen der Funktion noch keinen wert. wenn eis ein out waere, waerw es egal aber so nicht
    - Zeile 10 x ist nicht initialisiert, darf also nicht als ref übergeben werden.
    - Zeile 15 bei a wirde noch kein wert zugewiesen befor er genutzt wurde. es muss zuerst eine zuweisung stattfinden bei out.
    - Verfopple funktion macht nichts. ref wird nicht genutzt keine variable wird referenziert.

```csharp
    static void Main() {
        int x = 5; 
        int y = 10; 
        Berechne(out x, out y);
        Verdopple(ref x);
    }
    static void Berechne(out int a, out int b) {
        a = 10; // Zuweisung vor Nutzung
        b = a * 2;
    }
    static void Verdopple(ref int zahl) {
        zahl *= 2; 
    }
```
---

### Aufgabe 3: `break` und `continue` anwenden (15 Punkte)

**Ausgangslage:** Du hast ein Array mit Artikelnamen:

```csharp
string[] artikel = { "Apfel", "Banane", "Kiwi", "Orange", "Mango" };
```

**Aufgaben:**

a) **(5 Punkte)** Schreibe eine Schleife, die alle Artikel ausgibt, aber die Schleife mit `break` beendet, sobald "Kiwi" gefunden wird.  
   *Erwartete Ausgabe:* `Apfel Banane`

b) **(5 Punkte)** Schreibe eine Schleife, die alle Artikel ausgibt, die länger als 5 Zeichen sind. Verwende `continue`, um kürzere Artikel zu überspringen.  
   *Erwartete Ausgabe:* `Banane Orange`

c) **(5 Punkte)** Erkläre den Unterschied zwischen `break` und `continue` und gib je ein sinnvolles Einsatzszenario an.

```csharp
foreach (string a in artikel) {
    if (a == "Kiwi") break;
    Console.WriteLine(a);
}

foreach (string a in artikel) {
    if (a.Length <= 5) continue;
    Console.WriteLine(a);
}


```
Break bricht die schleife allgemein ab und führt dann den nachstehenden code aus.
continue bricht den aktuellen durchlauf der scheife ab aber sie looped weiter falls dies noch passieren sollte (bsp. wenn noch sachen im array sind)
Break: wenn man (ganau wie oben) etwas sucht, braucht man nicht die schleife weiter laufen lassen, wenn das objekt schon gefunden wurde
Continue: wenn zb. Wie oben eine lange liste an werten vorliegt aber nur manche gebraucht werden (Bsp alle die mit A begnnen oder einen spezifischen namen beinhalten), dann ist es besser wenn einfach der aktuelle durchlauf der schleife abgebrochen wird, da der aktuelle wert nicht gebraucht ist, und dann aber 
bei den anderen weitergemacht wird.



---

## Bewertung

| Teil | Punkte |
|------|--------|
| MC-Fragen (10 × 4) | 40 |
| Freitext (3 × 15) | 45 |
| **Gesamt** | **85** |

---

**Gutes Gelingen!**
