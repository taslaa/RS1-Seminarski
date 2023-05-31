using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeminarskiTest.Models
{
    public class Brend
    {
        [Key]
        public int Id { get; set; }
        public string NazivBrenda { get; set; }

        [ForeignKey(nameof(Drzava))]
        public int? DrzavaId { get; set; }
        public Drzava Drzava { get; set; }

        public string Luxury { get; set; }
        public string Slika { get; set; }
    }
}
