using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Bruch 1 (im Format 'Ganzzahl Zähler/Nenner', z. B. '1 1/3'):");
        int[] bruch1 = ParseMixedFraction(Console.ReadLine());

        Console.WriteLine("Bruch 2 (im Format 'Ganzzahl Zähler/Nenner', z. B. '1 1/3'):");
        int[] bruch2 = ParseMixedFraction(Console.ReadLine());

        int zaehler1 = bruch1[0];
        int nenner1 = bruch1[1];
        int zaehler2 = bruch2[0];
        int nenner2 = bruch2[1];

        // Brüche auf gemeinsamen Nenner bringen
        int gemeinsamerNenner = nenner1 * nenner2;
        int neuerZaehler1 = zaehler1 * nenner2;
        int neuerZaehler2 = zaehler2 * nenner1;

        // Zähler addieren
        int ergebnisZaehler = neuerZaehler1 + neuerZaehler2;

        // Ergebnis vereinfachen
        int gcd = GCD(ergebnisZaehler, gemeinsamerNenner);
        ergebnisZaehler /= gcd;
        gemeinsamerNenner /= gcd;

        // Ergebnis als gemischten Bruch berechnen
        int ganzzahl = ergebnisZaehler / gemeinsamerNenner;
        int restZaehler = ergebnisZaehler % gemeinsamerNenner;

        if (restZaehler == 0)
        {
            Console.WriteLine($"Ergebnis: {ganzzahl}");
        }
        else if (ganzzahl == 0)
        {
            Console.WriteLine($"Ergebnis: {restZaehler}/{gemeinsamerNenner}");
        }
        else
        {
            Console.WriteLine($"Ergebnis: {ganzzahl} {restZaehler}/{gemeinsamerNenner}");
        }
    }

    // Methode zur Berechnung des größten gemeinsamen Teilers (GCD)
    static int GCD(int a, int b)
    {
        while (b != 0)
        {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Methode zum Parsen eines gemischten Bruchs
    static int[] ParseMixedFraction(string input)
    {
        string[] parts = input.Split(' ');

        if (parts.Length == 2) // Gemischter Bruch
        {
            int ganzzahl = int.Parse(parts[0]);
            string[] bruch = parts[1].Split('/');
            int zaehler = int.Parse(bruch[0]);
            int nenner = int.Parse(bruch[1]);

            // Umwandlung in unechten Bruch
            zaehler = ganzzahl * nenner + zaehler;
            return new int[] { zaehler, nenner };
        }
        else if (parts.Length == 1) // Nur Bruch
        {
            string[] bruch = parts[0].Split('/');
            int zaehler = int.Parse(bruch[0]);
            int nenner = int.Parse(bruch[1]);
            return new int[] { zaehler, nenner };
        }
        else
        {
            throw new FormatException("Ungültiges Format. Bitte im Format 'Ganzzahl Zähler/Nenner' eingeben.");
        }
    }
}