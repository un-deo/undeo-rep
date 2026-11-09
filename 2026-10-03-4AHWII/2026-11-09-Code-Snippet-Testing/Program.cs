using System;

namespace KassaRechner
{
    class Program
    {
        public static void Main(string[] args)
        {
            string produkt;
            do
            {
                Console.WriteLine("Bitte rechnungszeile im Format ProduktName;Preis;Menge eingeben oder Lehrzeile für 'Weiter':");
                produkt = Console.ReadLine();
                if (produkt == "") { break; }
                Console.WriteLine("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
                Console.WriteLine("Eingegebenes Produkt: " + produkt);
                Console.WriteLine("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

            } while (produkt != "");

            Console.WriteLine("Gib eine Rabattregel ein: ");
            string rabattRegel = Console.ReadLine();
            Console.WriteLine("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
            Console.WriteLine("Rabattregel: " + rabattRegel);
            Console.WriteLine("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

        }

    };

}