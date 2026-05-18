using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoConsole.Models;

public class TodoItem
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Title { get; set; } = null!;

    public bool IsDone { get; set; }

    // optional relation to Player
    public int? PlayerId { get; set; }
    public Player? Player { get; set; }
}
