using System.ComponentModel.DataAnnotations;

namespace SeminarskiTest.Models
{
    public class Kartica
    {
        [Key]
        public int Id { get; set; }
        public string Naziv { get; set; }
        public string Vrsta { get; set; }
    }
}
