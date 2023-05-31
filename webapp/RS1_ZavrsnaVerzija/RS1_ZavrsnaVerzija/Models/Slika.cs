using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SeminarskiTest.Models
{
    public class Slika
    {
        [Key]
        public int Id { get; set; }
        public string SlikaSlika { get; set; }
        public string Opis { get; set; }

        [ForeignKey(nameof(Prodavnica))]
        public int? prodavnicaId { get; set; }
        public Prodavnica Prodavnica { get; set; }

    }
}
