using System.ComponentModel.DataAnnotations;

namespace SeminarskiTest.Models
{
    public class Kategorija
    {
        [Key]
        public int Id { get; set; }
        public string NazivKategorije { get; set; }
        public string Materijal { get; set; }
        public string Kvalitet { get; set; }
    }
}
