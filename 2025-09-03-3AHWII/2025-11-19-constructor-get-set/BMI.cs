using System;

public class BMI
{
    private double weightKg;
    private double heightMeters;

    public BMI(double weightKg, double heightMeters)
    {
        this.WeightKg = weightKg;
        this.HeightMeters = heightMeters;
    }

    public double WeightKg
    {
        get { return weightKg; }
        set
        {
            if (value <= 0) throw new ArgumentOutOfRangeException(nameof(WeightKg), "Weight must be positive.");
            weightKg = value;
        }
    }

    public double HeightMeters
    {
        get { return heightMeters; }
        set
        {
            if (value <= 0) throw new ArgumentOutOfRangeException(nameof(HeightMeters), "Height must be positive.");
            heightMeters = value;
        }
    }

    public double CalculateBMI()
    {
        return WeightKg / (HeightMeters * HeightMeters);
    }
}
