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

    class Position
    {
        public string Name;
        public decimal Preis;
        public int Menge;

        public Position(string name, decimal preis, int menge)
        {
            Name = name;
            Preis = preis;
            Menge = menge;
        }
        public decimal Summe()
        {
            //implement
            return;
        }

    }


    class Kassa
    {
        private List<Position> positionen; //check wether correct
        private IRabattRegel regel;

        public void Hinzufuegen(Position p)
        {
            //implement
        }

        public void SetzeRegel(IRabattRegel r)
        {
            //implement
        }

        public void Abrechnen()
        {
            //Implement
        }
    };


    interface IRabattRegel
    {
        string Beschreibung();
        decimal BerechneRabatt(List<Position> positionen);
    }

    class KeinRabatt : IRabattRegel
    {
        public string Beschreibung()
        {
            //implement
            return;

        }
        public decimal BerechneRabatt(List<Position> positionen)
        {
            //implement
            return;

        }
    };

    class ProzentRabatt : IRabattRegel
    {
        public string Beschreibung()
        {
            //implement
            return;

        }
        public decimal BerechneRabatt(List<Position> positionen)
        {
            //implement
            return;

        }
    };

    class DreiFuerZwei : IRabattRegel
    {
        public string Beschreibung()
        {
            //implement
            return;

        }
        public decimal BerechneRabatt(List<Position> positionen)
        {
            //implement
            return;

        }
    };

    class AbBetrag : IRabattRegel
    {
        public string Beschreibung()
        {
            //implement
            return;

        }
        public decimal BerechneRabatt(List<Position> positionen)
        {
            //implement
            return;

        }
    };
}