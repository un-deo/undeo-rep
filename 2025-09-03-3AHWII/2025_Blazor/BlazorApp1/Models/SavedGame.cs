using System;

namespace BlazorApp1.Models
{
    public class SavedGame
    {
        public int Id { get; set; }
        public int SourceGameId { get; set; }
        public string? Title { get; set; }
        public string? Thumbnail { get; set; }
        public string? ShortDescription { get; set; }
        public string? GameUrl { get; set; }
        public string? Genre { get; set; }
        public string? Platform { get; set; }
        public DateTime SavedAt { get; set; } = DateTime.UtcNow;
    }
}
