using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeminarskiTest.Models
{
    public class Dostavljac
    {
        [Key]
        public int Id { get; set; }
        public string Naziv { get; set; }

        [ForeignKey(nameof(Drzava))]
        public int? DrzavaId { get; set; }
        public Drzava Drzava { get; set; }

        public string Telefon { get; set; }
    }
}
