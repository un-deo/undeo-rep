using CsvHelper;
using CsvHelper.Configuration;
using System.Globalization;

class Program
{
    static string[] persons = new string[100];
    static void Main()
    {
        var filePath = "./persons.csv";
        using (var reader = new StreamReader(filePath))
        using (var csv = new CsvReader(reader, new CsvConfiguration(CultureInfo.InvariantCulture) { Delimiter = ";", HeaderValidated = null, MissingFieldFound = null }))

        {
            var records = csv.GetRecords<Person>();

            int i = 0;
            foreach (var record in records)
            {
                Console.WriteLine($"{i} - {record.Fullname} | {record.Email} | {record.Telefon} | {record.Adresse}");
                Console.WriteLine("--------------------------------------------------------------------------------");
                persons[i] = record.Fullname;
                i++;
            }
            Console.WriteLine(persons[10]);
            Console.WriteLine(persons[47]);
            Console.WriteLine(persons[48]);
        }
    }
}

public class Person
{
    public string Fullname { get; set; }
    public string Email { get; set; }
    public string Telefon { get; set; }
    public string Adresse { get; set; }
    public string Unicode { get; set; }
}



//hilfe bzw verständnis habe ich grossteils von hier: https://www.youtube.com/watch?v=z3BwMlcGdhg