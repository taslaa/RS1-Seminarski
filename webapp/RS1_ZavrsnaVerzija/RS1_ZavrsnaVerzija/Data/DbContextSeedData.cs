using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using SeminarskiTest.Models;

namespace SeminarskiTest.Data
{
    public class DbContextSeedData
    {
        private AppDbContext _context;

        public DbContextSeedData(AppDbContext context)
        {
            _context = context;
        }

        public async void SeedAdminUser()
        {
            var korisnik = new Korisnik
            {
             
                Ime = "Hamza",
                Prezime = "Taslidza",
                DatumRodjenja = DateTime.Now,
                Grad = "Mostar",
                BrojTelefona = "123",
                Adresa = "Mahala",
                Lozinka = "Lozinka1@",
                Email = "salem@seminarski.com",
                DrzavaId = 1,
                SpolId = 1
            };

            if (!_context.Korisnik.Any(u => u.Email == korisnik.UserName))
            {
                var userStore = new UserStore<Korisnik>(_context);
                await userStore.CreateAsync(korisnik);
            }
            await _context.SaveChangesAsync();
        }
    }
}
