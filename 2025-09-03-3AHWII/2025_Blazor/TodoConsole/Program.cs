using System;
using Microsoft.EntityFrameworkCore;
using TodoConsole.Data;
using TodoConsole.Models;

class Program
{
    static void Main()
    {
        var dbPath = System.IO.Path.Combine(Environment.CurrentDirectory, "todo_console.db");
        var options = new DbContextOptionsBuilder<AppDbContext>().UseSqlite($"Data Source={dbPath}").Options;

        using var db = new AppDbContext(options);

        // Try to apply migrations; fall back to EnsureCreated for quick debugging.
        try
        {
            db.Database.Migrate();
        }
        catch
        {
            db.Database.EnsureCreated();
        }

        while (true)
        {
            Console.WriteLine("\nTodo Console Menu:");
            Console.WriteLine("1) List Todo Items");
            Console.WriteLine("2) Create Todo Item");
            Console.WriteLine("3) Update Todo Item");
            Console.WriteLine("4) Delete Todo Item");
            Console.WriteLine("5) List Players");
            Console.WriteLine("6) Create Player");
            Console.WriteLine("7) Update Player");
            Console.WriteLine("8) Delete Player");
            Console.WriteLine("9) Assign Player to Todo");
            Console.WriteLine("0) Exit");
            Console.Write("Choose: ");
            var key = Console.ReadLine();

            switch (key)
            {
                case "1": ListTodos(db); break;
                case "2": CreateTodo(db); break;
                case "3": UpdateTodo(db); break;
                case "4": DeleteTodo(db); break;
                case "5": ListPlayers(db); break;
                case "6": CreatePlayer(db); break;
                case "7": UpdatePlayer(db); break;
                case "8": DeletePlayer(db); break;
                case "9": AssignPlayer(db); break;
                case "0": return;
                default: Console.WriteLine("Unknown option"); break;
            }
        }
    }

    static void ListTodos(AppDbContext db)
    {
        var todos = db.TodoItems.Include(t => t.Player).ToList();
        Console.WriteLine("\nTodo items:");
        foreach (var t in todos)
        {
            Console.WriteLine($"{t.Id}: {t.Title} [{(t.IsDone ? "Done" : "Open")}]{(t.Player != null ? " - Player: " + t.Player.Name : string.Empty)}");
        }
    }

    static void CreateTodo(AppDbContext db)
    {
        Console.Write("Title: ");
        var title = Console.ReadLine() ?? string.Empty;
        var todo = new TodoItem { Title = title };
        db.TodoItems.Add(todo);
        db.SaveChanges();
        Console.WriteLine($"Created Todo #{todo.Id}");
    }

    static void UpdateTodo(AppDbContext db)
    {
        Console.Write("Todo Id: ");
        if (!int.TryParse(Console.ReadLine(), out var id)) return;
        var todo = db.TodoItems.Find(id);
        if (todo == null) { Console.WriteLine("Not found"); return; }
        Console.Write($"Title ({todo.Title}): ");
        var title = Console.ReadLine();
        if (!string.IsNullOrWhiteSpace(title)) todo.Title = title;
        Console.Write($"IsDone ({todo.IsDone}): ");
        var isDone = Console.ReadLine();
        if (!string.IsNullOrWhiteSpace(isDone) && bool.TryParse(isDone, out var b)) todo.IsDone = b;
        db.SaveChanges();
        Console.WriteLine("Updated");
    }

    static void DeleteTodo(AppDbContext db)
    {
        Console.Write("Todo Id: ");
        if (!int.TryParse(Console.ReadLine(), out var id)) return;
        var todo = db.TodoItems.Find(id);
        if (todo == null) { Console.WriteLine("Not found"); return; }
        db.TodoItems.Remove(todo);
        db.SaveChanges();
        Console.WriteLine("Deleted");
    }

    static void ListPlayers(AppDbContext db)
    {
        var players = db.Players.Include(p => p.TodoItems).ToList();
        Console.WriteLine("\nPlayers:");
        foreach (var p in players)
        {
            Console.WriteLine($"{p.Id}: {p.Name} (Todos: {p.TodoItems.Count})");
        }
    }

    static void CreatePlayer(AppDbContext db)
    {
        Console.Write("Name: ");
        var name = Console.ReadLine() ?? string.Empty;
        var player = new Player { Name = name };
        db.Players.Add(player);
        db.SaveChanges();
        Console.WriteLine($"Created Player #{player.Id}");
    }

    static void UpdatePlayer(AppDbContext db)
    {
        Console.Write("Player Id: ");
        if (!int.TryParse(Console.ReadLine(), out var id)) return;
        var player = db.Players.Find(id);
        if (player == null) { Console.WriteLine("Not found"); return; }
        Console.Write($"Name ({player.Name}): ");
        var name = Console.ReadLine();
        if (!string.IsNullOrWhiteSpace(name)) player.Name = name;
        db.SaveChanges();
        Console.WriteLine("Updated");
    }

    static void DeletePlayer(AppDbContext db)
    {
        Console.Write("Player Id: ");
        if (!int.TryParse(Console.ReadLine(), out var id)) return;
        var player = db.Players.Include(p => p.TodoItems).FirstOrDefault(p => p.Id == id);
        if (player == null) { Console.WriteLine("Not found"); return; }
        if (player.TodoItems.Any())
        {
            Console.WriteLine("Player has todo items. Remove assignments first or delete anyway? (y/N): ");
            var ans = Console.ReadLine();
            if (!string.Equals(ans, "y", StringComparison.OrdinalIgnoreCase)) return;
        }
        db.Players.Remove(player);
        db.SaveChanges();
        Console.WriteLine("Deleted");
    }

    static void AssignPlayer(AppDbContext db)
    {
        Console.Write("Todo Id: ");
        if (!int.TryParse(Console.ReadLine(), out var todoId)) return;
        var todo = db.TodoItems.Find(todoId);
        if (todo == null) { Console.WriteLine("Todo not found"); return; }
        Console.Write("Player Id (empty to unassign): ");
        var s = Console.ReadLine();
        if (string.IsNullOrWhiteSpace(s))
        {
            todo.PlayerId = null;
        }
        else if (int.TryParse(s, out var playerId))
        {
            var player = db.Players.Find(playerId);
            if (player == null) { Console.WriteLine("Player not found"); return; }
            todo.PlayerId = playerId;
        }
        db.SaveChanges();
        Console.WriteLine("Assigned");
    }
}
