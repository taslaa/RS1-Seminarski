using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeminarskiTest.Models
{
    public class Dobavljac
    {
        [Key]
        public int Id { get; set; }
        public string NazivDobavljaca { get; set; }
        public int BrojDobavljaca { get; set; }

        [ForeignKey(nameof(Drzava))]
        public int? DrzavaId { get; set; }
        public Drzava Drzava { get; set; }

        //public ICollection<Proizvod> Proizvodi { get; set; }
    }
}
