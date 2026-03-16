namespace Inventar
{
    public interface IInventarGegenstand
    {
        string Name { get; }
        string BeschreibeDich();
    }

    public class Waffe : IInventarGegenstand
    {
        public string Name { get; }
        public int Schaden { get; }
        public string Rarity { get; }

        public Waffe(string name, int schaden, string rarity)
        {
            Name = name;
            Schaden = schaden;
            Rarity = rarity;
        }

        public string BeschreibeDich()
        {
            return $"Ich bin {Name} und mache {Schaden} Schaden. Seltenheit: {Rarity}";
        }
    }

    public class Heiltrank : IInventarGegenstand
    {
        public string Name { get; }
        public int Heilwert { get; }

        public Heiltrank(string name, int heilwert)
        {
            Name = name;
            Heilwert = heilwert;
        }

        public string BeschreibeDich()
        {
            return $"Ich bin {Name} und stelle {Heilwert} Lebenspunkte wieder her.";
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            var inventar = new List<IInventarGegenstand>();

            inventar.Add(new Waffe("Schwert", 15, "common"));
            inventar.Add(new Heiltrank("Kleiner Heiltrank", 10));
            inventar.Add(new Waffe("Excalibur", 500, "legendary"));
            inventar.Add(new Heiltrank("Chug Splash", 20));

            foreach (var gegenstand in inventar)
            {
                Console.WriteLine(gegenstand.BeschreibeDich());
            }
        }
    }
}
