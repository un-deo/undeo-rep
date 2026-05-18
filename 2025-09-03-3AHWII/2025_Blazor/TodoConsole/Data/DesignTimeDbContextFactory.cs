using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace TodoConsole.Data;

// Design-time factory so "dotnet ef" tools can create the context
public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
{
    public AppDbContext CreateDbContext(string[] args)
    {
        var builder = new DbContextOptionsBuilder<AppDbContext>();
        var dbPath = System.IO.Path.Combine(System.Environment.CurrentDirectory, "todo_console.db");
        builder.UseSqlite($"Data Source={dbPath}");
        return new AppDbContext(builder.Options);
    }
}
