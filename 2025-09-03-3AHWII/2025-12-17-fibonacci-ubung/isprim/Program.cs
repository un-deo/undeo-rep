using System;

namespace IsPrim
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter an integer: ");
            if (!long.TryParse(Console.ReadLine(), out long n))
            {
                Console.WriteLine("Invalid input");
                return;
            }

            Console.WriteLine(IsPrime(n) ? "Prime" : "Not prime");
        }

        static bool IsPrime(long n)
        {
            if (n < 2) return false;
            if (n == 2 || n == 3) return true;
            if (n % 2 == 0) return false;

            long limit = (long)Math.Sqrt(n);
            for (long i = 3; i <= limit; i += 2)
            {
                if (n % i == 0) return false;
            }

            return true;
        }
    }
}
