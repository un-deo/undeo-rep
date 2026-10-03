using System;
//codeblockdefinition
namespace RoutePlannerStrategy
{
    // ==========================================
    // MUSTER 1: STRATEGY PATTERN
    // ==========================================


    // 1. Interface: Das Strategie-Interface welches dynamisch zur laufzeit die strategie auswählt
    //regelt das Verhalten der Routenberechnung und wird von den konkreten Strategien implementiert
    public interface IRouteStrategy
    {
        // Methode zur Berechnung der Route
        void BuildRoute(string start, string destination);
    }

    // 2. Konkrete Strategie A: Auto --> teil des Interfaces
    public class CarRouteStrategy : IRouteStrategy
    {
        // Optionale Eigenschaft
        private bool _includeTollRoads;

        // Konstruktor mit optionalem Parameter
        public CarRouteStrategy(bool includeTollRoads = true)
        {
            _includeTollRoads = includeTollRoads;
        }

        // Implementierung der BuildRoute-Methode für Auto (vom Interface)
        public void BuildRoute(string start, string destination)
        {
            Console.WriteLine($"[Auto-Route] Schnellste Strecke von {start} nach {destination} über Autobahn berechnet (Maut inklusive: {_includeTollRoads}).");
        }
    }

    // 3. Konkrete Strategie B: Fahrrad
    public class BicycleRouteStrategy : IRouteStrategy
    {
        //gleich wie Auto, implementiert das Interface
        public void BuildRoute(string start, string destination)
        {
            Console.WriteLine($"[Fahrrad-Route] Einsteigerschonende Route von {start} nach {destination} über Radwege berechnet.");
        }
    }

    // 4. Konkrete Strategie C: Zu Fuß
    public class WalkingRouteStrategy : IRouteStrategy
    {
        //gleich wie Auto
        public void BuildRoute(string start, string destination)
        {
            Console.WriteLine($"[Fußgänger-Route] Kürzester Fußweg von {start} nach {destination} durch Fußgängerzonen und Parks berechnet.");
        }
    }

    // 5. Kontext-Klasse zur Verwendung der Strategien: Navigator
    //Die navigator klasse weiß nicht welche Strategie sie verwendet, sie ruft nur die Methode BuildRoute auf
    public class Navigator
    {
        // Referenz auf die aktuelle Strategie (wird im UI oder in der Factory gesetzt)
        private IRouteStrategy _routeStrategy;

        // Methode zum Setzen der Strategie
        public void SetRouteStrategy(IRouteStrategy routeStrategy)
        {
            _routeStrategy = routeStrategy;
        }

        // Methode zur Berechnung der Route unter Verwendung der aktuellen Strategie
        public void CalculateRoute(string start, string destination)
        {
            if (_routeStrategy == null)
            {
                throw new InvalidOperationException("Keine Routen-Strategie ausgewählt!");
            }

            // Aufruf der BuildRoute-Methode der aktuellen Strategie
            _routeStrategy.BuildRoute(start, destination);
        }
    }

    // ==========================================
    // MUSTER 2: SIMPLE FACTORY PATTERN
    // ==========================================

    // 6. Factory-Klasse zur Erzeugung der Routen-Strategien 
    // Die Factory kapselt die Logik zur Auswahl der richtigen Strategie basierend auf dem Transportmittel
    //regelt die Erzeugung der konkreten Strategie-Objekte und gibt diese zurück
    public static class RouteStrategyFactory
    {
        // Methode zur Erstellung der passenden Strategie basierend auf dem Transportmittel
        // Die Factory-Methode gibt eine Instanz des entsprechenden Strategie-Objekts zurück
        public static IRouteStrategy CreateStrategy(string transportType)
        {
            return transportType.ToLower() switch
            {
                // Auswahl der Strategie basierend auf dem Transportmittel --> erstellt das conkrete objekt der Klasse
                "car" or "auto" => new CarRouteStrategy(includeTollRoads: true),
                "bike" or "fahrrad" => new BicycleRouteStrategy(),
                "walk" or "zu fuß" => new WalkingRouteStrategy(),
                _ => throw new ArgumentException("Unbekanntes Transportmittel")
            };
        }
    }

    // 7. Hauptprogramm
    internal class Program
    {
        static void Main(string[] args)
        {
            Navigator navigator = new Navigator();
            string start = "Stephansplatz";
            string ziel = "Prater";

            // Beispiel 1: Auto-Route wählen via Factory
            IRouteStrategy carStrategy = RouteStrategyFactory.CreateStrategy("car");
            navigator.SetRouteStrategy(carStrategy);
            navigator.CalculateRoute(start, ziel);

            // Beispiel 2: Dynamischer Wechsel zur Laufzeit auf Fahrrad
            IRouteStrategy bikeStrategy = RouteStrategyFactory.CreateStrategy("bike");
            navigator.SetRouteStrategy(bikeStrategy);
            navigator.CalculateRoute(start, ziel);
        }
    }
}