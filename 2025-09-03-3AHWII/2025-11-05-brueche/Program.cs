public class Program
{
    public static void Main(string[] args)
    {
        Bruch b1 = new Bruch(args[0]);
        Bruch b2 = new Bruch(args[1]);
        Bruch b3 = b1.addiere(b2);
        Console.WriteLine("Ergebnis: " + b3.ToStringBruch());
    }

}