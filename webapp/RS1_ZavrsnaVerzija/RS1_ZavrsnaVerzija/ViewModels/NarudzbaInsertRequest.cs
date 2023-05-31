using System.ComponentModel.DataAnnotations;

namespace SeminarskiTest.ViewModels
{
    public class NarudzbaInsertRequest
    {
        public string KorisnikId { get; set; }
        public List<NarudzbaStavkaInsertRequest> ListaProizvoda { get; set; }
    }
}

