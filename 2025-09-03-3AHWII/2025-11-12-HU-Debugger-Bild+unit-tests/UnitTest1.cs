namespace _2025_11_12_HU_Debugger_Bild_unit_tests;

using System;
using System.IO;
using Xunit;

public class ProgramTests
{
    [Theory]
    [InlineData(new[] { "1/2", "1/3" }, "Ergebnis: 5/6")]
    [InlineData(new[] { "2/4", "1/4" }, "Ergebnis: 3/4")]
    [InlineData(new[] { "2/4", "1/0" }, "Nenner darf nicht 0 sein.")]
    [InlineData(new[] { "2/0", "1/8" }, "Nenner darf nicht 0 sein.")]


    public void Main_PrintsCorrectResult(string[] args, string expectedOutput)
    {
        // 1. Redirect console output
        var output = new StringWriter();
        Console.SetOut(output);

        // 2. Call Main with the test arguments
        Program.Main(args);

        // 3. Capture printed output and remove newline
        string printed = output.ToString().Trim();

        // 4. Assert output matches expected
        Assert.Equal(expectedOutput, printed);
    }
}
