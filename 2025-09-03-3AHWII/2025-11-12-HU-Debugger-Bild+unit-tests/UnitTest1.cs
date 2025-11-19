namespace _2025_11_12_HU_Debugger_Bild_unit_tests;

using System;
using System.IO;
using Xunit;

public class ProgramTests
{
    [Theory]
    [InlineData(new[] { "1/2", "1/3" }, "Ergebnis: 5/6")]
    [InlineData(new[] { "2/4", "1/4" }, "Ergebnis: 3/4")]
    [InlineData(new[] { "3/2", "1/2" }, "Ergebnis: 2")]
    [InlineData(new[] { "5/3", "2/3" }, "Ergebnis: 2 1/3")]
    [InlineData(new[] { "1 1/2", "2/3" }, "Ergebnis: 2 1/6")]
    [InlineData(new[] { "2 1/4", "1 3/4" }, "Ergebnis: 4")]
    [InlineData(new[] { "3/5", "1/5" }, "Ergebnis: 4/5")]
    [InlineData(new[] { "7/4", "1/4" }, "Ergebnis: 2")]
    [InlineData(new[] { "0/1", "2/3" }, "Ergebnis: 2/3")]
    [InlineData(new[] { "1 2/3", "2 1/3" }, "Ergebnis: 4")]
    [InlineData(new[] { "2/4", "1/0" }, "Nenner darf nicht 0 sein.")]
    [InlineData(new[] { "2/0", "1/2" }, "Nenner darf nicht 0 sein.")]
    [InlineData(new[] { "2/a", "1/3" }, "Ungültiges Format für den Bruchtext.")]
    [InlineData(new[] { "2/3", "1/a" }, "Ungültiges Format für den Bruchtext.")]
    [InlineData(new[] { "2/3", "1/" }, "Ungültiges Format für den Bruchtext.")]
    [InlineData(new[] { "2/", "1/a" }, "Ungültiges Format für den Bruchtext.")]
    [InlineData(new[] { "2/3", "1 2" }, "Ungültiges Format für den Bruchtext. Teile fehlen.")]
    [InlineData(new[] { "2/3", "1 2 2" }, "Ungültiges Format für den Bruchtext. Teile fehlen.")]

    public void Main_PrintsCorrectResult(string[] args, string expectedOutput)
    {
        var output = new StringWriter();
        Console.SetOut(output);

        Program.Main(args);

        string printed = output.ToString().Trim();

        Assert.Equal(expectedOutput, printed);
    }
}
