using System.ComponentModel.DataAnnotations.Schema;

namespace SeminarskiTest.Models
{
    public class Transakcija
    {
        public int Id { get; set; }
        public string NacinPlacanja { get; set; }

        [ForeignKey(nameof(Kartica))]
        public int? KarticaId { get; set; }
        public Kartica? Kartica { get; set; }
    }
}
