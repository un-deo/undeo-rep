//```csharp
using System;
using System.Linq;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Test arrays
        int[] numbers = { 5, 3, 8, 1, 2 };          // initial array
        Console.WriteLine("Original: " + string.Join(", ", numbers));

        // Array.Length - get count
        Console.WriteLine("Length: " + numbers.Length); // result: 5

        // Array.Sort - sorts in-place ascending
        Array.Sort(numbers);
        Console.WriteLine("After Sort: " + string.Join(", ", numbers)); // result: 1,2,3,5,8

        // Array.Reverse - reverses in-place
        Array.Reverse(numbers);
        Console.WriteLine("After Reverse: " + string.Join(", ", numbers)); // result: 8,5,3,2,1

        // Array.IndexOf - finds index of value or -1
        int idx = Array.IndexOf(numbers, 5);
        Console.WriteLine("IndexOf 5: " + idx); // result: index of 5 (1)

        // Array.Exists - checks if any element matches predicate
        bool hasGreaterThan4 = Array.Exists(numbers, n => n > 4);
        Console.WriteLine("Exists >4: " + hasGreaterThan4); // result: True

        // Array.Find - finds first element matching predicate
        int firstEven = Array.Find(numbers, n => n % 2 == 0);
        Console.WriteLine("First even: " + firstEven); // result: first even number (8 or 2 depending on current order)

        // Array.FindAll - returns all elements matching predicate
        int[] evens = Array.FindAll(numbers, n => n % 2 == 0);
        Console.WriteLine("All evens: " + string.Join(", ", evens)); // result: list of evens

        // Array.Copy - copy portion to new array
        int[] copy = new int[3];
        Array.Copy(numbers, 1, copy, 0, 3); // copy 3 elements starting at index 1
        Console.WriteLine("Copy (3 from idx1): " + string.Join(", ", copy)); // result: subset

        // Array.Resize - change array size (can grow or shrink)
        Array.Resize(ref numbers, numbers.Length + 2);
        numbers[numbers.Length - 2] = 10;
        numbers[numbers.Length - 1] = 20;
        Console.WriteLine("After Resize and add: " + string.Join(", ", numbers)); // result: original elements + 10,20

        // Convert to List<T> for common list operations
        List<int> list = new List<int>(numbers);
        Console.WriteLine("List from array: " + string.Join(", ", list));

        // List.Add - append element
        list.Add(7);
        Console.WriteLine("After Add(7): " + string.Join(", ", list));

        // List.Insert - insert at index
        list.Insert(0, 9);
        Console.WriteLine("After Insert(0,9): " + string.Join(", ", list));

        // List.Remove - removes first occurrence
        bool removed = list.Remove(1); // tries to remove value 1
        Console.WriteLine("Remove(1) successful: " + removed + " -> " + string.Join(", ", list));

        // List.RemoveAt - remove by index
        if (list.Count > 2) list.RemoveAt(2);
        Console.WriteLine("After RemoveAt(2): " + string.Join(", ", list));

        // List.Contains - check presence
        Console.WriteLine("Contains 8: " + list.Contains(8));

        // List.Sort - sorts list
        list.Sort();
        Console.WriteLine("List after Sort: " + string.Join(", ", list));

        // List.ToArray - convert back to array
        int[] arrFromList = list.ToArray();
        Console.WriteLine("Array from list: " + string.Join(", ", arrFromList));

        // LINQ examples (Where, Select, Aggregate)
        var greaterThanFive = arrFromList.Where(n => n > 5).ToArray();
        Console.WriteLine("Where >5: " + string.Join(", ", greaterThanFive));

        var doubled = arrFromList.Select(n => n * 2).ToArray();
        Console.WriteLine("Select *2: " + string.Join(", ", doubled));

        int sum = arrFromList.Aggregate(0, (acc, n) => acc + n);
        Console.WriteLine("Aggregate (sum): " + sum);
    }
}
//```