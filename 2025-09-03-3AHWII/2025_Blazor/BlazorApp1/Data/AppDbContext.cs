using Microsoft.EntityFrameworkCore;
using BlazorApp1.Models;

namespace BlazorApp1.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<SavedGame> SavedGames { get; set; } = null!;
        public DbSet<SavedPlayer> SavedPlayers { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SavedGame>().HasIndex(g => g.SourceGameId).IsUnique();
            modelBuilder.Entity<SavedPlayer>().HasIndex(p => p.SourcePlayerId).IsUnique();
        }
    }
}
