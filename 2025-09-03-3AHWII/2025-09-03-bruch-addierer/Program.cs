using System;

public class Program
{
    public static void Main(string[] args)
    {
        try
        {
            if (args.Length != 2)
            {
                throw new ArgumentException("Bitte geben Sie zwei Brüche im Format 'Ganzzahl Zähler/Nenner' ein. Bsp. dotnet run \"1 1/2\" \"2 3/4\"");
            }

            int[] bruch1 = ParseMixedFraction(args[0]);
            int[] bruch2 = ParseMixedFraction(args[1]);

            int zaehler1 = bruch1[0];
            int nenner1 = bruch1[1];
            int zaehler2 = bruch2[0];
            int nenner2 = bruch2[1];

            if (nenner1 == 0 || nenner2 == 0)
            {
                throw new DivideByZeroException("Nenner darf nicht 0 sein.");
            }

            int gemeinsamerNenner = nenner1 * nenner2;
            int neuerZaehler1 = zaehler1 * nenner2;
            int neuerZaehler2 = zaehler2 * nenner1;

            int ergebnisZaehler = neuerZaehler1 + neuerZaehler2;

            int gcd = GCD(ergebnisZaehler, gemeinsamerNenner);
            ergebnisZaehler /= gcd;
            gemeinsamerNenner /= gcd;

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
        catch (FormatException ex)
        {
            Console.WriteLine($"Formatfehler: {ex.Message}");
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine($"Rechenfehler: {ex.Message}");
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine($"Argumentfehler: {ex.Message}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Unerwarteter Fehler: {ex.Message}");
        }
    }

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

    static int[] ParseMixedFraction(string input)
    {
        try
        {
            string[] parts = input.Split(' ');

            if (parts.Length == 2)
            {
                int ganzzahl = int.Parse(parts[0]);
                string[] bruch = parts[1].Split('/');
                int zaehler = int.Parse(bruch[0]);
                int nenner = int.Parse(bruch[1]);

                if (nenner == 0)
                    throw new DivideByZeroException("Nenner darf nicht 0 sein.");

                zaehler = ganzzahl * nenner + zaehler;
                return new int[] { zaehler, nenner };
            }
            else if (parts.Length == 1) 
            {
                if (parts[0].Contains('/'))
                {
                    string[] bruch = parts[0].Split('/');
                    int zaehler = int.Parse(bruch[0]);
                    int nenner = int.Parse(bruch[1]);

                    if (nenner == 0)
                        throw new DivideByZeroException("Nenner darf nicht 0 sein.");

                    return new int[] { zaehler, nenner };
                }
                else
                {
                    // Handle whole numbers as fraction /1
                    int ganzzahl = int.Parse(parts[0]);
                    return new int[] { ganzzahl, 1 };
                }
            }
            else
            {
                throw new FormatException("Ungültiges Format. Bitte im Format 'Ganzzahl Zähler/Nenner' eingeben.");
            }
        }
        catch (IndexOutOfRangeException)
        {
            throw new FormatException("Ungültiges Bruchformat. Erwartet wird 'Zähler/Nenner'.");
        }
        catch (FormatException)
        {
            throw new FormatException("Ungültige Zahl im Bruch. Bitte nur ganze Zahlen verwenden.");
        }
    }
}
