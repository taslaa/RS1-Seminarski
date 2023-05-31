using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SeminarskiTest.Models
{
    public class Proizvod
    {
        [Key]
        public int Id { get; set; }
        public string NazivProizvoda { get; set; }

        [ForeignKey(nameof(Valuta))]
        public int? ValutaId { get; set; }
        public Valuta Valuta { get; set; }
        public double Cijena { get; set; }
        public string SerijskiBroj { get; set; }
        public string Slika { get; set; }

        [ForeignKey(nameof(Kategorija))]
        public int? KategorijaId { get; set; }
        public Kategorija Kategorija { get; set; }

        [ForeignKey(nameof(Dobavljac))]
        public int? DobavljacId { get; set; }
        public virtual Dobavljac Dobavljac { get; set; }

        [ForeignKey(nameof(Brend))]
        public int? BrendId { get; set; }
        public Brend Brend { get; set; }

    }
}
