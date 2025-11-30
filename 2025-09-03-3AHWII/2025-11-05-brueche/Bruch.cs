using System;

public class Bruch
{
    private int ganzzahl;
    private int zaehler;
    private int nenner;

    public Bruch(string bruchtext)
    {
        bruchtext = bruchtext.Trim();

        try
        {
            if (bruchtext.Contains(" "))
            {
                string[] parts = bruchtext.Split(' ');
                this.ganzzahl = int.Parse(parts[0]);
                string[] fractionParts = parts[1].Split('/');
                this.zaehler = int.Parse(fractionParts[0]) + (this.ganzzahl * int.Parse(fractionParts[1]));
                this.nenner = int.Parse(fractionParts[1]);
            }
            else if (bruchtext.Contains("/"))
            {
                string[] teile = bruchtext.Split('/');
                this.zaehler = int.Parse(teile[0]);
                this.nenner = int.Parse(teile[1]);
            }
            else
            {
                this.ganzzahl = int.Parse(bruchtext);
                this.zaehler = this.ganzzahl;
                this.nenner = 1;
            }

            if (this.nenner == 0)
                throw new ArgumentException("Nenner darf nicht 0 sein.");
        }
        catch (FormatException)
        {
            throw new FormatException("Ungültiges Format für den Bruchtext.");
        }
        catch (IndexOutOfRangeException)
        {
            throw new FormatException("Ungültiges Format für den Bruchtext. Teile fehlen.");
        }
    }

    public Bruch addiere(Bruch andererBruch)
    {
        int neuerZaehler = this.zaehler * andererBruch.nenner + andererBruch.zaehler * this.nenner;
        int neuerNenner = this.nenner * andererBruch.nenner;

        if (neuerNenner == 0)
            throw new ArgumentException("Nenner darf nicht 0 sein.");

        return new Bruch(neuerZaehler + "/" + neuerNenner);
    }

    public string ToStringBruch()
    {
        int teiler = Math.Min(Math.Abs(zaehler), Math.Abs(nenner));
        while (teiler > 1)
        {
            if (zaehler % teiler == 0 && nenner % teiler == 0)
            {
                zaehler /= teiler;
                nenner /= teiler;
            }
            teiler--;
        }

        int ganzeZahl = zaehler / nenner;
        int restZaehler = Math.Abs(zaehler % nenner);

        if (ganzeZahl != 0 && restZaehler != 0)
            return $"{ganzeZahl} {restZaehler}/{nenner}";
        else if (ganzeZahl != 0)
            return $"{ganzeZahl}";
        else
            return $"{zaehler}/{nenner}";
    }
}
