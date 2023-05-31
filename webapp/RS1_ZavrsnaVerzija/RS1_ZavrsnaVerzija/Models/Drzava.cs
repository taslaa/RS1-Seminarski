using System.ComponentModel.DataAnnotations;

namespace SeminarskiTest.Models
{
    public class Drzava
    {
        [Key]
        public int Id { get; set; }
        public string NazivDrzave { get; set; }
        public string Sifra { get; set; }
        public string Skracenica { get; set; }
    }
}
