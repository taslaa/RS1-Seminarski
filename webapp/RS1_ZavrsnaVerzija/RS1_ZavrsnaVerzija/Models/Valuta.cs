using System.ComponentModel.DataAnnotations;

namespace SeminarskiTest.Models
{
    public class Valuta
    {
        [Key]
        public int Id { get; set; }
        public string Naziv { get; set; }
    }
}
