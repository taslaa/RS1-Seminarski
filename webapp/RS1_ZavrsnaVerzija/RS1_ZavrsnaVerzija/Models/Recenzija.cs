using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeminarskiTest.Models
{
    public class Recenzija
    {
        [Key]
        public int id { get; set; }
        public string opis { get; set; }
        public int ocjena { get; set; }

        [ForeignKey(nameof(proizvod))]
        public int proizvodId { get; set; }
        public Proizvod proizvod { get; set; }

        public string korisnikId { get; set; }
        public string korisnikIme { get; set; }
        public virtual Korisnik korisnik { get; set; }
    }
}
