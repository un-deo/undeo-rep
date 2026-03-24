using System;
using System.Collections.Generic;

namespace Hausuebung
{
    public class Einkaufsliste
    {
        private readonly string[] _artikel = new string[10];
        private int _zaehler = 0;

        public int Anzahl => _zaehler;

        public bool VersucheHinzufuegen(string artikel, out string meldung)
        {
            if (_zaehler >= _artikel.Length)
            {
                meldung = "Die Einkaufsliste ist voll. Artikel konnte nicht hinzugefügt werden.";
                return false;
            }

            _artikel[_zaehler++] = artikel;
            meldung = $"Artikel '{artikel}' wurde hinzugefügt. Anzahl: {Anzahl}";
            return true;
        }

        public bool Enthaelt(string gesuchterArtikel)
        {
            bool gefunden = false;
            for (int i = 0; i < _zaehler; i++)
            {
                if (string.Equals(_artikel[i], gesuchterArtikel, StringComparison.OrdinalIgnoreCase))
                {
                    gefunden = true;
                    break;
                }
            }
            return gefunden;
        }

        public void GibKurzeNamenAus(int minLaenge)
        {
            Console.WriteLine($"Artikel mit Länge < {minLaenge}:");
            for (int i = 0; i < _zaehler; i++)
            {
                var name = _artikel[i];
                if (name == null) continue;
                if (name.Length >= minLaenge) continue;
                Console.WriteLine($" - {name} (Länge: {name.Length})");
            }
        }

        public static void VergleicheStrings(string a, string b)
        {
            bool gleichOperator = (a == b);
            bool equalsMethode = a.Equals(b);
            Console.WriteLine($"Vergleich mit '==': {gleichOperator}");
            Console.WriteLine($"Vergleich mit '.Equals()': {equalsMethode}");
            Console.WriteLine($"Beide Vergleiche liefern dasselbe Ergebnis: {gleichOperator == equalsMethode}");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var liste = new Einkaufsliste();

            string meldung;
            liste.VersucheHinzufuegen("Milch", out meldung);
            Console.WriteLine(meldung);
            liste.VersucheHinzufuegen("Brot", out meldung);
            Console.WriteLine(meldung);
            liste.VersucheHinzufuegen("Eier", out meldung);
            Console.WriteLine(meldung);

            for (int i = 0; i < 10; i++)
            {
                var item = "Item" + i;
                liste.VersucheHinzufuegen(item, out meldung);
                Console.WriteLine(meldung);
            }

            Console.WriteLine($"Enthaelt 'Brot'? {liste.Enthaelt("Brot")} ");
            Console.WriteLine($"Enthaelt 'Honig'? {liste.Enthaelt("Honig")} ");

            liste.GibKurzeNamenAus(5);

            string a = "Milch";
            string b = "Mil" + "ch";
            Console.WriteLine($"String a: {a}, String b: {b}");
            Einkaufsliste.VergleicheStrings(a, b);

        }
    }
}
