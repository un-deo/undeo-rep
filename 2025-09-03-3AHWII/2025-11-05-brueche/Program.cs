using System;

public class Program
{
    public static void Main(string[] args)
    {
        try
        {
            Bruch b1 = new Bruch(args[0]);
            Bruch b2 = new Bruch(args[1]);
            Bruch b3 = b1.addiere(b2);
            Console.WriteLine("Ergebnis: " + b3.ToStringBruch());
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}
