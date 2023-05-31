using SeminarskiTest.Models;

namespace SeminarskiTest.ViewModels
{
    public class NarudzbaStavkaVModel
    {
        public int NarudzbaStavkaID { get; set; }
        public int ProizvodID { get; set; }
        public int NarudzbaID { get; set; }
        public int Kolicina { get; set; }

        public virtual Proizvod Proizvod { get; set; }
    }
}
