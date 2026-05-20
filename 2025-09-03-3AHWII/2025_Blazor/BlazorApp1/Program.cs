using BlazorApp1.Components;
using BlazorApp1.Data;
using Microsoft.EntityFrameworkCore;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();
// Register a shared HttpClient for server-side API calls
builder.Services.AddHttpClient();

// Configure EF Core with SQLite database in Data/saveditems.db
var contentRoot = builder.Environment.ContentRootPath;
var dataDir = Path.Combine(contentRoot, "Data");
if (!Directory.Exists(dataDir)) Directory.CreateDirectory(dataDir);
var dbPath = Path.Combine(dataDir, "saveditems.db");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite($"Data Source={dbPath}"));

var app = builder.Build();

// Ensure database is created
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
