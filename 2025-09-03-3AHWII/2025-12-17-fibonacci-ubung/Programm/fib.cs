using System;

public class Program
{
    public static void Main(string[] args)
    {
        try
        {
            int n = int.Parse(args[0]);
            Console.WriteLine("Fibonacci-Zahl für n = " + n + " ist " + Fibonacci(n));
        }
        catch (FormatException)
        {
            Console.WriteLine("Bitte eine gültige ganze Zahl als Argument eingeben.");
        }
        catch (ArgumentOutOfRangeException ex)
        {
            Console.WriteLine(ex.Message);
        }
    }

    public static int Fibonacci(int n)
    {
        if (n < 0)
            throw new ArgumentOutOfRangeException("n darf nicht negativ sein.");
        if (n == 1) return 0;
        if (n == 2) return 1;

        int a = 0, b = 1, c = 0;
        for (int i = 3; i <= n; i++)
        {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}