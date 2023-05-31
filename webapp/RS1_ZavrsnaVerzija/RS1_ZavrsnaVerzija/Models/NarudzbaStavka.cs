namespace SeminarskiTest.Models
{
    public class NarudzbaStavka
    {
        public int NarudzbaStavkaID { get; set; }
        public int ProizvodID { get; set; }
        public int NarudzbaID { get; set; }
        public int Kolicina { get; set; }

        public virtual Proizvod Proizvod { get; set; } = null!;
        //public virtual Narudzba Narudzba { get; set; } = null!;
    }
}
