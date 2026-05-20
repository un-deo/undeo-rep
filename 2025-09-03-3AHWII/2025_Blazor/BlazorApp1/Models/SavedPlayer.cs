using System;

namespace BlazorApp1.Models
{
    public class SavedPlayer
    {
        public int Id { get; set; }
        public string? SourcePlayerId { get; set; }
        public string? Username { get; set; }
        public string? Avatar { get; set; }
        public string? MetaJson { get; set; }
        public DateTime SavedAt { get; set; } = DateTime.UtcNow;
    }
}
