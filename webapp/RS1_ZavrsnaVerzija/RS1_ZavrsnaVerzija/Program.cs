using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SeminarskiTest.Data;
using SeminarskiTest.Helper;
using SeminarskiTest.Models;
using SeminarskiTest.Services;
using SeminarskiTest.Services.Interfaces;


// Add services to the container.

var builder = WebApplication.CreateBuilder(args);
var myAllowDifferentOrigins = "_myAllowDifferentOrigins";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));

});


builder.Services.AddAuthentication();
builder.Services.ConfigureIdentity();


builder.Services.AddAutoMapper(typeof(IProizvodRepository));
builder.Services.AddScoped<IKorisnikRepository, KorisnikRepository>();
builder.Services.AddScoped<IRecenzijaRepository, RecenzijaRepository>();
builder.Services.AddScoped<IDrzavaRepository, DrzavaRepository>();
//builder.Services.AddScoped<IKarticaService, KarticaService>();
builder.Services.AddScoped<IKategorijaRepository, KategorijaRepository>();
//builder.Services.AddScoped<INarudzbaService, NarudzbaServis>();
builder.Services.AddScoped<IProizvodRepository, ProizvodRepository>();
builder.Services.AddScoped<ISpolRepository, SpolRepository>();
builder.Services.AddScoped<IValutaRepository, ValutaRepository>();
builder.Services.AddScoped<IBrendRepository, BrendRepository>();
builder.Services.AddScoped<IDobavljacRepository, DobavljacRepository>();
builder.Services.AddScoped<IProdavnicaRepository, ProdavnicaRepository>();
builder.Services.AddScoped<IDostavljacRepository, DostavljacRepository>();
builder.Services.AddScoped<ISlikaRepository, SlikaRepository>();
builder.Services.AddScoped<IEvidencijaZaposlenikaRepository, EvidencijaZaposlenikaRepository>();
builder.Services.AddScoped<IAuthManager, AuthManager>();
builder.Services.AddSingleton<TimeManager>();
builder.Services.AddSingleton<TimerManager2>();


builder.Services.ConfigureSwaggerDoc();
builder.Services.AddSignalR();
builder.Services.AddRazorPages();


builder.Services.AddIdentity<Korisnik, IdentityRole>(options =>
{
    options.SignIn.RequireConfirmedAccount = true;
    options.User.RequireUniqueEmail = false;
    options.Password.RequiredLength = 6;
    options.Password.RequireDigit = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireUppercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
    options.Lockout.MaxFailedAccessAttempts = 5;
    options.Lockout.AllowedForNewUsers = true;
})
        .AddEntityFrameworkStores<AppDbContext>()
        .AddDefaultTokenProviders();


builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowDifferentOrigins,
        builder => {
            builder.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseAuthentication();

app.UseCors(myAllowDifferentOrigins);


app.MapControllers();
app.MapRazorPages();
app.MapHub<ChartHub>("/Chart");
app.MapHub<ChartHub2>("/Chart2");

app.Run();
