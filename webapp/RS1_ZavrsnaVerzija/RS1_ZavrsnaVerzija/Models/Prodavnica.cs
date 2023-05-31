using System.ComponentModel.DataAnnotations;

namespace SeminarskiTest.Models
{
    public class Prodavnica
    {
        [Key]
        public int Id { get; set; }
        public string Naziv { get; set; }
        public string Adresa { get; set; }
        public int Telefon { get; set; }
        public string Slika { get; set; }
    }
}
