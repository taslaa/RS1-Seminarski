using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SeminarskiTest.Models;

namespace SeminarskiTest.Helper
{
    public class KorisnikConfiguration : IEntityTypeConfiguration<Korisnik>
    {
        public void Configure(EntityTypeBuilder<Korisnik> builder)
        {
            builder.HasData(
                new Korisnik
                {
                   
                    Ime = "Hamza",
                    Prezime = "Taslidza",
                    DatumRodjenja = DateTime.Now,
                    Grad = "Mostar",
                    BrojTelefona = "123",
                    Adresa  ="Mahala",
                    Lozinka  ="Lozinka1@",
                    Email = "salem@seminarski.com",
                    DrzavaId = 1,
                    SpolId = 1
                }
                );
        }
    }
}
