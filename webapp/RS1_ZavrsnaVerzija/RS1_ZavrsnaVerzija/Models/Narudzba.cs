namespace SeminarskiTest.Models
{
    public class Narudzba
    {
        public Narudzba()
        {
            NarudzbaStavka = new HashSet<NarudzbaStavka>();
        }

        public int NarudzbaID { get; set; }
        public string? BrojNarudzbe { get; set; }
        public string KorisnikID { get; set; }
        public DateTime DatumNarudzbe { get; set; }
        public virtual Korisnik Korisnik { get; set; } = null!;
        public virtual ICollection<NarudzbaStavka> NarudzbaStavka { get; set; }
    }
}
