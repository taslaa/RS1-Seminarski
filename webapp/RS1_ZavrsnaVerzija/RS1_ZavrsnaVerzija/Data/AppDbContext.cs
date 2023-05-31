using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using SeminarskiTest.Helper;
using SeminarskiTest.Models;

namespace SeminarskiTest.Data
{
    public class AppDbContext : IdentityDbContext<Korisnik>
    {
        public DbSet<Valuta> Valuta { get; set; }
        public DbSet<Drzava> Drzava { get; set; }
        public DbSet<Kartica> Kartica { get; set; }
        public DbSet<Kategorija> Kategorija { get; set; }
        public DbSet<Korisnik> Korisnik { get; set; }
        public DbSet<Proizvod> Proizvod { get; set; }
        public DbSet<Slika> Slika { get; set; }
        public DbSet<Brend> Brend { get; set; }
        public DbSet<Dobavljac> Dobavljac { get; set; }
        public DbSet<EvidencijaZaposlenika> EvidencijaZaposlenika { get; set; }
        public DbSet<Spol> Spol { get; set; }
        public DbSet<Prodavnica> Prodavnica { get; set; }
        public DbSet<Dostavljac> Dostavljac { get; set; }
        public DbSet<Recenzija> Recenzija { get; set; }
        public DbSet<Narudzba> Narudzba { get; set; }
        public DbSet<NarudzbaStavka> NarudzbaStavka { get; set; }




        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new RoleConfiguration());
            

            // builder.Entity<Proizvod>().HasOne(x => x.Dobavljac).WithMany(y => y.Proizvod).OnDelete(DeleteBehavior.Restrict);
            base.OnModelCreating(builder);
        }
    }
}
