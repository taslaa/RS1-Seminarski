using SeminarskiTest.Models;

namespace SeminarskiTest.ViewModels
{
    public class EvidencijaZaposlenikaVModel
    {
        //public bool Aktivan { get; set; }
        //public DateTime? DatumAktivnosti { get; set; }
        //public DateTime? DatumOdjave { get; set; }
        //public string KorisnikId { get; set; }
        //public string KorisnikIme { get; set; }


        public List<EvidencijaZaposlenika> evidencije { get; set; }
        public List<Korisnik> korisnici { get; set; }
    }
}
