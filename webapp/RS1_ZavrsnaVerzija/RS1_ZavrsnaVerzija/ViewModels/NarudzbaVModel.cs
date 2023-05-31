using SeminarskiTest.Models;

namespace SeminarskiTest.ViewModels
{
    public class NarudzbaVModel
    {
        public int NarudzbaID { get; set; }
        public string BrojNarudzbe { get; set; }
        public DateTime DatumNarudzbe { get; set; }
        public string KorisnikID { get; set; }
        public virtual Korisnik Korisnik { get; set; }
        public virtual ICollection<NarudzbaStavka> NarudzbaStavka { get; set; }

    }
}
