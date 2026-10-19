using System;

namespace KassaRechner
{
    class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Bitte rechnungszeile im Format ProduktName;Preis;Menge eingeben:");
            string produkt = Console.ReadLine();
            Console.WriteLine("Eingegebenes Produkt: " + produkt);
            Console.WriteLine("Gib eine Rabattregel ein: ");
            string rabattRegel = Console.ReadLine();
            Console.WriteLine("Rabattregel: " + rabattRegel);
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
        }
        public decimal BerechneRabatt()
        {
            //implement
        }
    };

    class ProzentRabatt : IRabattRegel
    {
        public string Beschreibung()
        {
            //implement
        }
        public decimal BerechneRabatt()
        {
            //implement
        }
    };

    class DreiFuerZwei : IRabattRegel
    {
        public string Beschreibung()
        {
            //implement
        }
        public decimal BerechneRabatt()
        {
            //implement
        }
    };

    class AbBetrag : IRabattRegel
    {
        public string Beschreibung()
        {
            //implement
        }
        public decimal BerechneRabatt()
        {
            //implement
        }
    };






}