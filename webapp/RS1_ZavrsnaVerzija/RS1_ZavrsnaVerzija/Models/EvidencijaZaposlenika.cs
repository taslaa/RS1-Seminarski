using System.ComponentModel.DataAnnotations;

namespace SeminarskiTest.Models
{
    public class EvidencijaZaposlenika
    {
        [Key]
        public int Id { get; set; }
        public bool Aktivan { get; set; }
        public DateTime? DatumPrijave { get; set; }
        public DateTime? DatumOdjave { get; set; }
        public string KorisnikId { get; set; }
        public string KorisnikIme { get; set; }
        public virtual Korisnik Korisnik { get; set; }
    }
}
