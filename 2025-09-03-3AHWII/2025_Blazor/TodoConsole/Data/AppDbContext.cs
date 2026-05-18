using Microsoft.EntityFrameworkCore;
using TodoConsole.Models;

namespace TodoConsole.Data;

public class AppDbContext : DbContext
{
    public DbSet<TodoItem> TodoItems { get; set; } = null!;
    public DbSet<Player> Players { get; set; } = null!;

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Player>().HasMany(p => p.TodoItems).WithOne(t => t.Player).HasForeignKey(t => t.PlayerId);
    }
}
