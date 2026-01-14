using CsvHelper;
using CsvHelper.Configuration;
using System.Globalization;
using System.Text;
using System.IO;

class Program
{
    static string[] persons = new string[100];
    static void Main()
    {
        Console.OutputEncoding = Encoding.UTF8;

        string filePath = "./persons.csv";
        using (var reader = new StreamReader(filePath, Encoding.UTF8))
        using (var csv = new CsvReader(reader, new CsvConfiguration(CultureInfo.InvariantCulture) { Delimiter = ";", HeaderValidated = null, MissingFieldFound = null }))
        {
            var records = csv.GetRecords<Person>();

            int i = 0;
            foreach (var record in records)
            {
                persons[i] = $"{i} - {record.Fullname} | {record.Email} | {record.Telefon} | {record.Adresse} | {record.unicode}";
                Console.WriteLine(persons[i]);
                Console.WriteLine("--------------------------------------------------------------------------------");
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
    public string? Fullname { get; set; }
    public string? Email { get; set; }
    public string? Telefon { get; set; }
    public string? Adresse { get; set; }
    public string? unicode { get; set; }
}

//hilfe bzw verständnis habe ich grossteils von hier: https://www.youtube.com/watch?v=z3BwMlcGdhgusing CsvHelper;