using System.ComponentModel.DataAnnotations;

namespace TodoConsole.Models;

public class Player
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = null!;

    public List<TodoItem> TodoItems { get; set; } = new();
}
