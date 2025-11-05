using System;
using System.IO;
using Xunit;

namespace MyApp.Tests
{
    public class ProgramTests
    {
        // Normal cases
        [Theory]
        [InlineData(new string[] { "1 1/2", "2 3/4" }, "Ergebnis: 4 1/4")]
        [InlineData(new string[] { "1/2", "1/2" }, "Ergebnis: 1")]
        [InlineData(new string[] { "2", "3/4" }, "Ergebnis: 2 3/4")]
        public void Main_WithFractions_PrintsExpectedResult(string[] args, string expectedOutput)
        {
            // Capture console output
            using var sw = new StringWriter();
            Console.SetOut(sw);

            // Run your program
            Program.Main(args);

            // Get printed output
            var output = sw.ToString().Trim();

            // Assert it matches expected
            Assert.Equal(expectedOutput, output);
        }

        // Error cases
        [Theory]
        [InlineData(new string[] { "1 1/0", "2 3/4" }, "Rechenfehler: Nenner darf nicht 0 sein.")]
        [InlineData(new string[] { "1 1/2" }, "Argumentfehler: Bitte geben Sie zwei Brüche im Format 'Ganzzahl Zähler/Nenner' ein. Bsp. dotnet run \"1 1/2\" \"2 3/4\"")]
        [InlineData(new string[] { "abc", "1/2" }, "Formatfehler: Ungültige Zahl im Bruch. Bitte nur ganze Zahlen verwenden.")]
        public void Main_WithInvalidInput_PrintsErrorMessage(string[] args, string expectedOutput)
        {
            using var sw = new StringWriter();
            Console.SetOut(sw);

            Program.Main(args);

            var output = sw.ToString().Trim();

            Assert.Equal(expectedOutput, output);
        }
    }
}
