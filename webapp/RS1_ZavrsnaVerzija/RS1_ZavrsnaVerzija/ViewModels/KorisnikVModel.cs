using System.ComponentModel.DataAnnotations;

namespace SeminarskiTest.ViewModels

{
    public class KorisnikVModel : LoginKorisnikVModel
    {
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public DateTime DatumRodjenja { get; set; }
        public string Grad { get; set; }
        public string BrojTelefona { get; set; }
        public string Adresa { get; set; }
        public int? DrzavaID { get; set; }
        public int? SpolId { get; set; }
        //public ICollection<string> Roles { get; set; }
    }
}
