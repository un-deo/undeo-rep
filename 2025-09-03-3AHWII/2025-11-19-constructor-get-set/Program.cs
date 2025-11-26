//using System;

class Program
{
    static void Main()
    {
        // Create a BMI object using the constructor (initializes the object)
        BMI person = new BMI(weightKg: 70, heightMeters: 1.75);
        BMI person2 = new BMI(weightKg: 170, heightMeters: 2.75);


        // Use the property getters to read values and the method to compute BMI
        Console.WriteLine($"Weight: {person.WeightKg} kg");
        Console.WriteLine($"Height: {person.HeightMeters} m");
        Console.WriteLine($"BMI: {person.CalculateBMI():F2}");

    }
}
