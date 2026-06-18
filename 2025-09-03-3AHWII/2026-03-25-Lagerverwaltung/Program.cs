using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        // Schritt 1: Array (Das feste Regal)
        Console.WriteLine("Schritt 1: Array (Das feste Regal)");
        string[] regalPlatze = new string[5]
        {
            "Zahnriemen",
            "Asche",
            "Bremsbelag",
            "Kupplung",
            "Anlasser"
        };

        Array.Sort(regalPlatze, StringComparer.OrdinalIgnoreCase);
        Console.WriteLine("Inhalt des Regals (alphabetisch):");
        foreach (var teil in regalPlatze)
        {
            Console.WriteLine(teil);
        }

        Console.WriteLine();

        // Schritt 2: List<T> (Die dynamische Einlagerung)
        Console.WriteLine("Schritt 2: List<T> (Die dynamische Einlagerung)");
        List<string> eingangskorb = new List<string>();
        eingangskorb.Add("Schraube");
        eingangskorb.Add("Mutter");
        eingangskorb.Add("Bolzen");
        eingangskorb.Add("Feder");

        Console.WriteLine("Eingangskorb vor Entfernen:");
        foreach (var t in eingangskorb)
            Console.WriteLine(t);

        // Entferne das zweite Element (Index 1)
        if (eingangskorb.Count > 1)
        {
            Console.WriteLine($"Entferne zweites Element: {eingangskorb[1]}");
            eingangskorb.RemoveAt(1);
        }

        // Prüfen, ob "Schraube" noch vorhanden ist
        bool hatSchraube = eingangskorb.Contains("Schraube");
        Console.WriteLine(hatSchraube
            ? "Die Schraube ist noch im Eingangskorb vorhanden."
            : "Die Schraube ist nicht mehr im Eingangskorb.");

        Console.WriteLine($"Anzahl verbleibender Teile im Eingangskorb: {eingangskorb.Count}");

        Console.WriteLine();

        // Schritt 3: Dictionary (Das Such-System)
        Console.WriteLine("Schritt 3: Dictionary (Das Such-System)");
        var artikel = new Dictionary<int, string>
        {
            [101] = "Motor",
            [102] = "Getriebe",
            [103] = "Reifen"
        };

        // Beispielaufrufe der Suchfunktion
        FindArtikel(artikel, 102);
        FindArtikel(artikel, 999);

        // Zusatzaufgabe: Alle Einträge ausgeben
        Console.WriteLine("Alle Artikel im Lager:");
        foreach (var kvp in artikel)
        {
            Console.WriteLine($"ID: {kvp.Key}, Teil: {kvp.Value}");
        }

        // Schritt 4: Abschluss
        Console.WriteLine();
        Console.WriteLine("Fertig. Drücken Sie eine beliebige Taste zum Beenden...");
        Console.ReadKey();
    }

    // FindArtikel nimmt das Dictionary und eine ID entgegen und nutzt TryGetValue
    static void FindArtikel(Dictionary<int, string> bestand, int id)
    {
        if (bestand.TryGetValue(id, out var name))
        {
            Console.WriteLine($"Gefunden: ID {id} => {name}");
        }
        else
        {
            Console.WriteLine($"Fehler: Die Artikelnummer {id} ist unbekannt.");
        }
    }
}
